import { test, expect } from "@playwright/test";

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

test.describe("Links: internal link validation", () => {
  for (const { path, name } of pages) {
    test(`${name} page internal links return 200`, async ({ page, request }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      const internalHrefs = await page.evaluate(() => {
        const links = document.querySelectorAll('a[href^="/"]');
        return [...new Set(Array.from(links).map((a) => a.getAttribute("href")!))];
      });

      for (const href of internalHrefs) {
        // Skip anchor-only links and special protocol links
        if (href === "#" || href.startsWith("#")) continue;
        const res = await request.get(href);
        expect(
          res.status(),
          `Broken link on ${name} page: ${href} returned ${res.status()}`
        ).toBe(200);
      }
    });
  }
});

test.describe("Links: external links have proper attributes", () => {
  for (const { path, name } of pages) {
    test(`${name} page external links have target=_blank and rel=noopener`, async ({
      page,
    }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      const externalLinks = await page.evaluate(() => {
        const links = document.querySelectorAll(
          'a[href^="http"]:not([href*="localhost"])'
        );
        return Array.from(links).map((a) => ({
          href: a.getAttribute("href"),
          target: a.getAttribute("target"),
          rel: a.getAttribute("rel"),
        }));
      });

      for (const link of externalLinks) {
        expect(
          link.target,
          `External link ${link.href} missing target="_blank"`
        ).toBe("_blank");
        expect(
          link.rel,
          `External link ${link.href} missing rel="noopener noreferrer"`
        ).toContain("noopener");
        expect(link.rel).toContain("noreferrer");
      }
    });
  }
});

test.describe("Links: navigation links work on all pages", () => {
  test("header nav links navigate correctly", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const navLinks = [
      { name: "Features", url: "/features" },
      { name: "Pricing", url: "/pricing" },
      { name: "About", url: "/about" },
      { name: "Blog", url: "/blog" },
    ];

    for (const link of navLinks) {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      const nav = page.locator('nav[aria-label="Main navigation"]');
      await nav.getByRole("link", { name: link.name }).click();
      await page.waitForURL(`**${link.url}`);
      expect(page.url()).toContain(link.url);
    }
  });

  test("footer links navigate correctly", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const footer = page.locator("footer");

    const footerLinks = [
      "Features",
      "Pricing",
      "Blog",
      "About",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
    ];

    for (const label of footerLinks) {
      const link = footer.getByRole("link", { name: label }).first();
      await expect(link).toBeVisible();
      const href = await link.getAttribute("href");
      expect(href).toBeTruthy();
      expect(href).toMatch(/^\//);
    }
  });
});

test.describe("Links: mailto and tel links", () => {
  test("mailto links have correct format", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "domcontentloaded" });

    const mailtoLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('a[href^="mailto:"]');
      return Array.from(links).map((a) => a.getAttribute("href"));
    });

    for (const href of mailtoLinks) {
      expect(href).toMatch(/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }
  });

  test("footer email link exists", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const footer = page.locator("footer");
    const emailLink = footer.locator('a[href^="mailto:"]');
    const count = await emailLink.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});

test.describe("Forms: demo request form validation", () => {
  test("demo form shows validation errors for empty required fields", async ({
    page,
  }) => {
    await page.goto("/contact", { waitUntil: "domcontentloaded" });

    // Submit empty form
    const submitBtn = page.getByRole("button", { name: "Request a Demo" });
    await submitBtn.click();

    // Should show validation errors
    await expect(page.getByText("Name is required.")).toBeVisible();
    await expect(page.getByText("Email is required.")).toBeVisible();
    await expect(page.getByText("Company is required.")).toBeVisible();
    await expect(page.getByText("Please select your role.")).toBeVisible();
  });

  test("demo form validates email format", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "domcontentloaded" });

    // Fill invalid email
    await page.fill("#demo-name", "Test User");
    await page.fill("#demo-email", "invalid-email");
    await page.fill("#demo-company", "Test Co");
    await page.selectOption("#demo-role", "Developer");

    await page.getByRole("button", { name: "Request a Demo" }).click();

    await expect(
      page.getByText("Please enter a valid email address.")
    ).toBeVisible();
  });

  test("demo form submits successfully with valid data", async ({
    page,
  }) => {
    // Mock the API endpoint
    await page.route("/api/demo-request", (route) => {
      route.fulfill({ status: 200, body: JSON.stringify({ ok: true }) });
    });

    await page.goto("/contact", { waitUntil: "domcontentloaded" });

    await page.fill("#demo-name", "Test User");
    await page.fill("#demo-email", "test@example.com");
    await page.fill("#demo-company", "Test Co");
    await page.selectOption("#demo-role", "Developer");

    await page.getByRole("button", { name: "Request a Demo" }).click();

    // Should show success message
    await expect(page.getByText("You're on the list!")).toBeVisible();
  });
});


test.describe("Forms: newsletter form validation", () => {
  test("newsletter form rejects empty email", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const footer = page.locator("footer");
    const subscribeBtn = footer.getByRole("button", { name: "Subscribe" });

    await subscribeBtn.click();

    // Should show toast error for invalid email
    // Toast is rendered in the DOM
    await expect(
      page.getByText("Please enter a valid email address")
    ).toBeVisible({ timeout: 5000 });
  });

  test("newsletter form rejects invalid email", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const footer = page.locator("footer");
    const emailInput = footer.locator('input[name="email"]');
    await emailInput.fill("not-an-email");

    await footer.getByRole("button", { name: "Subscribe" }).click();

    await expect(
      page.getByText("Please enter a valid email address")
    ).toBeVisible({ timeout: 5000 });
  });

  test("newsletter form submits successfully with valid email", async ({
    page,
  }) => {
    // Mock the API endpoint
    await page.route("/api/newsletter", (route) => {
      route.fulfill({ status: 200, body: JSON.stringify({ ok: true }) });
    });

    await page.goto("/", { waitUntil: "domcontentloaded" });

    const footer = page.locator("footer");
    const emailInput = footer.locator('input[name="email"]');
    await emailInput.fill("test@example.com");

    await footer.getByRole("button", { name: "Subscribe" }).click();

    // Should show success toast
    await expect(page.getByText("subscribed")).toBeVisible({ timeout: 5000 });
  });
});
