import { test, expect } from "@playwright/test";

test("Show Input Message", async ({ page }) => {

    await page.goto(
        "https://www.lambdatest.com/selenium-playground/simple-form-demo",
        {
            waitUntil: "networkidle"
        }
    );

    const input = page.locator('input#user-message').first();
    await input.fill("hello");
    await expect(input).toHaveValue("hello");
    await page.locator("#showInput").click();
    await expect(page.locator("#message")).toContainText("hello");
    console.log("Displayed message:",await page.locator("#message").textContent());
});