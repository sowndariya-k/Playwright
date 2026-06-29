import { test, expect } from "@playwright/test";

test("Sum Two Values", async ({ page }) => {

    await page.goto(
        "https://www.lambdatest.com/selenium-playground/simple-form-demo",
        { waitUntil: "networkidle" }
    );

    await page.locator("#sum1").fill("12");
    await page.locator("#sum2").fill("12");

    console.log("sum1 value:", await page.locator("#sum1").inputValue());
    console.log("sum2 value:", await page.locator("#sum2").inputValue());


    const button = page.locator("button:has-text('Get Sum')");

    console.log("Button count:", await button.count());


    await button.click();


    await page.waitForTimeout(2000);


    console.log(
        "Result text:",
        await page.locator("#addmessage").innerText()
    );

});