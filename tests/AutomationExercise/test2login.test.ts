import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await page.locator('input[data-qa="login-email"]').fill('sowndariya51@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sow@911!');
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Wait longer for post-login navigation to complete
  await page.waitForLoadState('networkidle');

  // ✅ Check if login failed (wrong credentials / account deleted)
  const loginError = page.locator('.login-form p[style*="color: red"]');
  const hasError = await loginError.isVisible().catch(() => false);
  if (hasError) {
    throw new Error('Login failed — account may have been deleted by a previous test run. Re-register first.');
  }

  // ✅ Increase timeout for Logout to appear
  await expect(page.locator('#header')).toContainText('Logout', { timeout: 15000 });
  await expect(page.getByText('Logged in as')).toBeVisible({ timeout: 10000 });

  await page.getByRole('link', { name:' Delete Account' }).click();
  await expect(page.locator('b')).toContainText('Account Deleted!');
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
});
