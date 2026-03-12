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

test.describe("Cross-browser: layout consistency", () => {
  for (const { path, name } of pages) {
    test(`${name} page (${path}) loads without errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (err) => errors.push(err.message));

      const res = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(res?.status()).toBe(200);

      // No JS console errors
      expect(errors).toEqual([]);
    });
  }

  test("header renders with logo and navigation", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Logo
    const logo = header.locator('a[href="/"] img').first();
    await expect(logo).toBeVisible();

    // Desktop navigation links
    const nav = header.locator('nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();
    for (const label of ["Features", "Pricing", "About", "Blog"]) {
      await expect(nav.getByRole("link", { name: label })).toBeVisible();
    }

    // CTA button
    await expect(
      header.getByRole("link", { name: "Request Demo" })
    ).toBeVisible();
  });

  test("footer renders with all link sections", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Footer link sections
    for (const label of [
      "Features",
      "Pricing",
      "Blog",
      "About",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
    ]) {
      await expect(footer.getByRole("link", { name: label })).toBeVisible();
    }
  });

  test("CSS Grid and Flexbox render correctly on pricing page", async ({
    page,
  }) => {
    await page.goto("/pricing", { waitUntil: "domcontentloaded" });

    // Pricing cards should be laid out in a grid/flex container
    const cards = page.locator('[class*="grid"]').first();
    await expect(cards).toBeVisible();

    const box = await cards.boundingBox();
    expect(box).not.toBeNull();
    // Container should have reasonable width
    expect(box!.width).toBeGreaterThan(200);
  });

  test("interactive elements are functional", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Test link navigation
    const featuresLink = page
      .locator('nav[aria-label="Main navigation"]')
      .getByRole("link", { name: "Features" });
    await featuresLink.click();
    await page.waitForURL("**/features");
    expect(page.url()).toContain("/features");
  });

  test("page navigation works across all pages", async ({ page }) => {
    for (const { path } of pages) {
      const res = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(res?.status()).toBe(200);

      // Page should have a main content area
      const main = page.locator("main, #main-content, [role='main']");
      const mainCount = await main.count();
      expect(mainCount).toBeGreaterThanOrEqual(1);
    }
  });
});
