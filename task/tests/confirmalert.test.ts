import { test, expect } from "@playwright/test";

test('Confirm alert', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on("dialog", async alert =>{
        const text =alert.message();
        console.log(text);
        await alert.accept();
    })
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: "Click Me" }).nth(1).click();
    await expect(page.locator('#confirm-demo')).toContainText('You pressed OK!');
    await page.close();
});