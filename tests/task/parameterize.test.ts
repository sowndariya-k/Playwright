import { test, expect } from "@playwright/test";

const searchData = [
  { keyword: "Playwright" },
  { keyword: "Selenium" },
  { keyword: "Cypress" }
];

test.describe("Google Search Parameterized Test", () => {

  for (const data of searchData) {

    test(`Search - ${data.keyword}`, async ({ page }) => {

      await page.goto("https://www.google.com");

      await page.locator('textarea[name="q"]').fill(data.keyword);
      await page.keyboard.press("Enter");

      await expect(page).toHaveURL(
        new RegExp(`.*search.*${data.keyword}`, "i")
      );

    });

  }

});