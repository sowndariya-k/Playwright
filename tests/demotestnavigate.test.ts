import { chromium } from "@playwright/test";

(async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Home Page
    await page.goto("https://www.demoblaze.com/");
    console.log("Current URL 1:", page.url());

    // Open a Product
    await page.click("text=Samsung galaxy s6");
    await page.waitForLoadState();

    console.log("Current URL 2:", page.url());

    // Back Navigation
    await page.goBack();
    await page.waitForLoadState();

    console.log("Current URL 3:", page.url());

    // Forward Navigation
    await page.goForward();
    await page.waitForLoadState();

    console.log("Current URL 4:", page.url());

    // Refresh Current Page
    await page.reload();
    await page.waitForLoadState();

    console.log("Current URL 5:", page.url());

    // Back Again
    await page.goBack();
    await page.waitForLoadState();

    console.log("Current URL 6:", page.url());

    await page.waitForTimeout(5000);

    await browser.close();

})();