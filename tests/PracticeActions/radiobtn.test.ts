import { test, expect } from "@playwright/test";

test("Radio Button Example", async ({ page }) => {

    await page.goto("https://leafground.com/radio.xhtml");

    const chrome = page.locator("//label[normalize-space()='Chrome']").first();

    await chrome.click();

    const radio = chrome.locator("xpath=preceding-sibling::input");

    await expect(radio).toBeChecked();

    console.log("Chrome selected");

});