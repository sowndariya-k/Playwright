import { test, expect } from "@playwright/test";

test("Basic Checkbox", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

   await page.locator('.ui-chkbox-box').first().click();
    await expect(page.locator("input[type='checkbox']").first()).toBeChecked();
});


test("Ajax Checkbox", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

    await page.getByText("Ajax").click();

    await expect(page.locator(".ui-growl-message")).toContainText("Checked");
});

test("Favorite Languages", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
    await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
});

test("Disabled Checkbox", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

    const disabled = page.locator("//div[@id='j_idt87:j_idt102']");

    await expect(disabled).toBeDisabled();
});



test("Toggle Switch", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

    const toggle = page.locator('.ui-toggleswitch-slider');

    await toggle.click();

    await expect(page.locator("input[type='checkbox']").nth(5)).toBeChecked();
});


test("Tri State Checkbox", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator(".ui-chkbox-box").nth(5).click();
});


test("Multiple Cities", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");
    await page.locator('.ui-icon.ui-icon-triangle-1-s').click();
    await page.getByText("Paris").click();
    await page.getByText("London").click();
    await expect(page.locator("//div[@id='j_idt87:multiple_panel']//li[3]")).toBeChecked();
    await expect(page.locator("//label[@for='2c63ec9c-7ae9-4aad-8b9e-822ff83ed0e5']")).toBeChecked();
});