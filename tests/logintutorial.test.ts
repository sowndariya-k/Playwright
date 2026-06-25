import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('sowndariya@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sow@911!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('link', { name: 'Edit your account information' }).click();
  await expect(page.getByRole('textbox', { name: '* E-Mail' })).toHaveValue('sowndariya@gmail.com');
});