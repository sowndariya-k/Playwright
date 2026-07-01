import { test , expect} from '@playwright/test';

test('Test Timeout Example', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com');
    await page.waitForTimeout(5000);
});

test('Assertion Timeout', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.locator('button').click();
    await expect(page.locator('#finish')).toHaveText('Hello World!');
});

test('Action Timeout', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    page.setDefaultTimeout(3000);
    await page.locator('#username').fill('tomsmith');
});