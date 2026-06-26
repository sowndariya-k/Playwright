import { chromium, test, expect } from "@playwright/test";
test("Test Demo", async () => {
    
const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');
    await page.locator('//input[@id="user-message"]').getAttribute("placeholder");
    await expect(page.locator('//input[@id="user-message"]')).toHaveAttribute("placeholder","Please enter your Message");
    console.log("Before entering:",page.locator('//input[@id="user-message"]'))
    await page.locator('//input[@id="user-message"]').click();
    await page.locator('//input[@id="user-message"]').fill('hello');
    await page.locator('#showInput').click();
    await expect(page.locator('#message')).toContainText('hello');
    await browser.close();
});