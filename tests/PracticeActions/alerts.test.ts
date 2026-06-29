import { test, expect } from "@playwright/test";
test("Simple Alert", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.getByRole("button", { name: "Show" }).first().click();
});

test("Confirmation Alert - Accept", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator("//span[text()='Show']").nth(1).click();
});

test("Confirmation Alert - Dismiss", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    await page.locator("//span[text()='Show']").nth(1).click();
});

test("Prompt Alert", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept("Sowndariya");
    });

    await page.locator("//span[text()='Show']").nth(4).click();
});

test("Sweet Alert", async ({ page }) => {
    await page.goto("https://leafground.com/alert.xhtml");

    await page.locator("//span[text()='Show']").nth(2).click();

    await expect(page.locator(".ui-dialog-title")).toHaveText("Dialog");

    await page.getByRole("button", { name: "Dismiss" }).click();
});

test("Sweet Modal Dialog", async ({ page }) => {
    await page.goto("https://leafground.com/alert.xhtml");

    await page.locator("//span[text()='Show']").nth(3).click();

    await expect(page.locator(".ui-dialog-title"))
        .toHaveText("Modal Dialog (Sweet Alert)");

    await page.keyboard.press("Escape");
});

test("Delete Confirmation", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml");

    await page.getByRole("button", { name: "Delete" }).click();

    await page.getByRole("button", { name: "Yes" }).click();
});



test("Minimize and Maximize", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml");

    await page.locator("//span[text()='Show']").last().click();

    await expect(page.getByText("Min and Max")).toBeVisible();

    // Maximize
    await page.locator(".ui-dialog-titlebar-maximize").click();

    // Minimize
    await page.locator(".ui-dialog-titlebar-minimize").click();
});