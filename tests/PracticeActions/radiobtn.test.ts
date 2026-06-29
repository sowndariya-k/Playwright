import { test, expect } from "@playwright/test";

test("Radio Button Example", async ({ page }) => {

    await page.goto("https://leafground.com/radio.xhtml");
    const chrome = page.locator("//label[normalize-space()='Chrome']").first();
    await chrome.waitFor({ state: "visible" });
    await chrome.click();
    await page.waitForTimeout(1000);
    const chromeRadio = page.locator("//label[normalize-space()='Chrome']/preceding-sibling::div//input").first();
    await expect(chromeRadio).toBeChecked();

    console.log("Chrome selected successfully");
});