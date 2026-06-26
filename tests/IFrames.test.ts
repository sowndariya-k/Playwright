import {test, expect} from '@playwright/test';

test('Frames', async ({page}) => {
    await page.goto("https://letcode.in/frame");

    const allframes = page.frames();
    console.log("No of frames: " + allframes.length);

    const myFrame = page.frame("firstFr");

    await myFrame?.fill("input[name='fname']", "sownd");
    await myFrame?.fill("input[name='lname']", "K");

    await page.waitForTimeout(3000);

    const frame = page.frameLocator('iframe[name="firstFr"]');

    await expect(frame.locator("p")).toContainText("sownd");
});
test('Frames2', async ({page}) => {
    // Fix: page.goto() was missing — iframe never loaded
    await page.goto("https://letcode.in/frame");

    const frame1 = page.frameLocator('iframe[name="firstFr"]');

    await frame1.locator("input[name='fname']").fill("sownd");
    await frame1.locator("input[name='lname']").fill("K");

    await expect(frame1.locator("p")).toContainText("You have entered");
    await expect(frame1.locator("p")).toContainText("sownd");
    await expect(frame1.locator("p")).toContainText("K");

    await page.waitForTimeout(3000);

    const innerFrame = frame1.frameLocator("iframe[src='/innerframe']");
    await innerFrame.locator("input[name='email']").fill("sk@gmail.com");

    await page.waitForTimeout(3000);
    await page.close();
});


