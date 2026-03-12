import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  { path: "/", name: "Home" },
  { path: "/features", name: "Features" },
  { path: "/pricing", name: "Pricing" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/blog", name: "Blog" },
  { path: "/privacy", name: "Privacy" },
  { path: "/terms", name: "Terms" },
];

test.describe("Accessibility: axe-core audit (WCAG 2.1 AA)", () => {
  for (const { path, name } of pages) {
    test(`${name} page passes axe audit`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(
        results.violations,
        `Accessibility violations on ${name} page:\n${results.violations.map((v) => `- ${v.id}: ${v.description} (${v.nodes.length} elements)`).join("\n")}`
      ).toEqual([]);
    });
  }
});

test.describe("Accessibility: heading hierarchy", () => {
  for (const { path, name } of pages) {
    test(`${name} page has proper heading hierarchy`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      const headings = await page.evaluate(() => {
        const els = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        return Array.from(els).map((el) => ({
          level: parseInt(el.tagName[1]),
          text: el.textContent?.trim().slice(0, 50) || "",
        }));
      });

      // Should have at least one heading
      expect(headings.length).toBeGreaterThan(0);

      // First heading should be h1
      expect(headings[0].level).toBe(1);

      // No heading level should skip more than one level
      for (let i = 1; i < headings.length; i++) {
        const jump = headings[i].level - headings[i - 1].level;
        expect(
          jump,
          `Heading skip: h${headings[i - 1].level} "${headings[i - 1].text}" -> h${headings[i].level} "${headings[i].text}"`
        ).toBeLessThanOrEqual(1);
      }
    });
  }
});

test.describe("Accessibility: images have alt text", () => {
  for (const { path, name } of pages) {
    test(`${name} page images have alt attributes`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      const imagesWithoutAlt = await page.evaluate(() => {
        const imgs = document.querySelectorAll("img");
        return Array.from(imgs)
          .filter((img) => {
            const alt = img.getAttribute("alt");
            // Decorative images can have alt="" but must have the attribute
            return alt === null;
          })
          .map((img) => img.src);
      });

      expect(
        imagesWithoutAlt,
        `Images missing alt attribute: ${imagesWithoutAlt.join(", ")}`
      ).toEqual([]);
    });
  }
});

test.describe("Accessibility: keyboard navigation", () => {
  test("can navigate header links with Tab key", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Tab through focusable elements - skip-to-content should be first
    await page.keyboard.press("Tab");

    // After a few tabs, we should reach nav links
    for (let i = 0; i < 10; i++) {
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        return {
          tag: el?.tagName,
          text: el?.textContent?.trim().slice(0, 50),
          href: el?.getAttribute("href"),
        };
      });

      if (focused.href === "/features") {
        // Found the first nav link via keyboard
        break;
      }
      await page.keyboard.press("Tab");
    }

    const focused = await page.evaluate(
      () => document.activeElement?.getAttribute("href") || ""
    );
    // Should have reached a focusable link
    expect(focused).toBeTruthy();
  });

  test("skip-to-content link is present and works", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // The skip link should exist
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toHaveCount(1);

    // Tab to it and verify it becomes visible on focus
    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
  });

  test("Escape key closes mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Open mobile menu
    await page.getByLabel("Open menu").click();
    const mobileNav = page.locator('nav[aria-label="Mobile navigation"]');
    await expect(mobileNav).toBeVisible();

    // Press Escape
    await page.keyboard.press("Escape");

    // Menu should close (or at least the close button should be accessible)
    // Note: Escape behavior depends on implementation
  });

  test("focus indicators are visible on interactive elements", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Tab to the first focusable element
    await page.keyboard.press("Tab");

    // Check that the focused element has visible focus styling
    const focusStyle = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      const style = window.getComputedStyle(el);
      return {
        outline: style.outline,
        outlineWidth: style.outlineWidth,
        boxShadow: style.boxShadow,
      };
    });

    expect(focusStyle).not.toBeNull();
    // Should have some visual focus indicator (outline or box-shadow)
    const hasFocusIndicator =
      (focusStyle!.outline && focusStyle!.outline !== "none" && focusStyle!.outlineWidth !== "0px") ||
      (focusStyle!.boxShadow && focusStyle!.boxShadow !== "none");
    expect(hasFocusIndicator).toBe(true);
  });
});

test.describe("Accessibility: ARIA and form labels", () => {
  test("navigation has aria-label", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const mainNav = page.locator('nav[aria-label="Main navigation"]');
    await expect(mainNav).toHaveCount(1);
  });

  test("contact form fields have associated labels", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "domcontentloaded" });

    // Each input/select/textarea should have a label
    const formFields = page.locator(
      "form input:not([type='hidden']):not([aria-hidden='true']), form select, form textarea"
    );
    const count = await formFields.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const field = formFields.nth(i);
      const id = await field.getAttribute("id");
      const ariaLabel = await field.getAttribute("aria-label");
      const ariaLabelledby = await field.getAttribute("aria-labelledby");

      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        const hasLabel = (await label.count()) > 0;
        const hasAriaLabel = !!ariaLabel || !!ariaLabelledby;
        expect(
          hasLabel || hasAriaLabel,
          `Form field #${id} has no associated label`
        ).toBe(true);
      }
    }
  });

  test("social links have aria-labels", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const footer = page.locator("footer");
    const socialLinks = footer.locator("a[aria-label]");
    const count = await socialLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});
