import { test, expect } from "@playwright/test";

test('Register User', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');

    await page.locator('#sum1').click();
    await page.locator('#sum1').fill('12');
    console.log(await page.locator('#sum1').inputValue());

    await page.locator('#sum2').click();
    await page.locator('#sum2').fill('12');
    console.log(await page.locator('#sum2').inputValue());

    console.log("Before entering:", await page.locator('#addmessage').textContent());

    const button = page.locator('//button[normalize-space()="Get Sum"]').first().click();

    await expect(page.locator('#addmessage')).toContainText('24');

    console.log("After entering:", await page.locator('#addmessage').textContent());
    await page.close();
});