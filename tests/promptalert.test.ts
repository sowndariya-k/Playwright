import { test, expect } from "@playwright/test";

test('prompt alert', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on("dialog", async alert =>{
        const text =alert.message();
        console.log(text);
        await alert.accept('hello');
    })
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: "Click Me" }).nth(2).click();
    await expect(page.locator('#prompt-demo')).toContainText('hello');
    await page.close();
});