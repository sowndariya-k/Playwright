import { test, expect } from "@playwright/test";

test("Iterate windows", async ({ page, context }) => {
    await page.goto("https://demoqa.com/browser-windows");

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);
    await tab.waitForLoadState();

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await window.waitForLoadState();

    const pages = context.pages();
    console.log(`Total pages open: ${pages.length}`);

    for (const p of pages) {
        if (p.url().includes("sample")) {
            const text = await p.locator("#sampleHeading").textContent();
            console.log("Heading text:", text);

            await expect(p.locator("#sampleHeading"))
                .toHaveText("This is a sample page");
        }
    }

    for (const p of pages) {
        if (p !== page) {
            await p.close();
        }
    }
});

test("Iteration window attribute", async ({ page, context }) => {
    await page.goto("https://demoqa.com/browser-windows");

    const [newTab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);
    await newTab.waitForLoadState();

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newWindow.waitForLoadState();

    const pages = context.pages();
    console.log(`Total pages open: ${pages.length}`);

    for (const p of pages) {
        console.log(`Title: ${await p.title()} | URL: ${p.url()}`);
    }

    for (const p of pages) {
        if (p.url().includes("sample")) {
            await expect(p.locator("#sampleHeading"))
                .toHaveText("This is a sample page");

            console.log("Verified heading on:", p.url());
        }
    }

    for (const p of pages) {
        if (p !== page) {
            await p.close();
        }
    }
});