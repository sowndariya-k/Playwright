import {test, expect} from '@playwright/test';

test('Handle windows', async ({page, context}) => {
    await page.goto("https://demoqa.com/browser-windows");
    console.log("First window url: ", page.url());

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    await newWindow.waitForLoadState();

    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page");

    console.log("New window url: ", newWindow.url());

    await newWindow.close();
});