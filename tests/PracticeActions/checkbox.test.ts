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

    const checkbox = page.locator("#j_idt87\\:j_idt102_input");

    await expect(checkbox).toBeDisabled();
});


test("Toggle Switch", async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml");

    const toggle = page.locator(".ui-toggleswitch-slider");

    await toggle.click();

    const toggleInput = page.locator(".ui-toggleswitch input");

    await expect(toggleInput).toBeChecked();

});


test("Tri State Checkbox", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator(".ui-chkbox-box").nth(5).click();
});


test("Multiple Cities", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator("#j_idt87\\:multiple .ui-selectcheckboxmenu-trigger").click();

    const panel = page.locator("#j_idt87\\:multiple_panel");

    await panel.getByText("Paris", { exact: true }).click();
    await panel.getByText("London", { exact: true }).click();

    await expect(
        panel.locator("input[type='checkbox']").nth(2)
    ).toBeChecked();

    await expect(
        panel.locator("input[type='checkbox']").nth(3)
    ).toBeChecked();
});