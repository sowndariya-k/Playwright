import { test, expect } from "@playwright/test";

test("Wait for Visibility", async ({ page }) => {
    await page.goto("https://leafground.com/waits.xhtml");

    await page.locator("//span[text()='Click']").first().click();

    const button = page.locator("//span[text()='I am here']");

    await expect(button).toBeVisible();

    console.log("Button is visible");
});

test("Wait for Invisibility", async ({ page }) => {
    await page.goto("https://leafground.com/waits.xhtml");

    await page.locator('button[name="j_idt87:j_idt92"]').click();

    const button = page.getByRole('button', { name: 'I am about to hide' });

    await expect(button).toBeHidden();

    console.log("Button disappeared");
});

test("Wait for Clickable", async ({ page }) => {
    await page.goto("https://leafground.com/waits.xhtml");

    await page.getByRole("button", { name: "Click First Button" }).click();

    await expect(page.getByText("Message 2")).toBeVisible();

    console.log("Message 2 is displayed.");
});

test("Wait for Text Change", async ({ page }) => {

    await page.goto("https://leafground.com/waits.xhtml");

    // Click button
    await page.locator('button[name="j_idt87:j_idt98"]').click();


    // Element whose text changes
    const text = page.locator("#j_idt87\\:hide4");


    await expect(text).toHaveText("Did you notice?");


    console.log("Text changed");

});