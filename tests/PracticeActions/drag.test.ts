import { test, expect } from "@playwright/test";


test("Drag and Drop", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.leafground.com/drag.xhtml", {
        waitUntil: "domcontentloaded"
    });
    const draggable = page.locator("#form\\:drag_content");
    const droppable = page.locator("#form\\:drop");
    await draggable.dragTo(droppable);
    console.log("Drag completed");
});


test("Mouse Drag Action", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.leafground.com/drag.xhtml", {
        waitUntil: "domcontentloaded"
    });
    const source = page.locator("#form\\:drag_content");
    const target = page.locator("#form\\:drop");
    await source.hover();
    await page.mouse.down();
    await target.hover();
    await page.mouse.up();
    console.log("Mouse drag completed");

});


test("Mouse Click Actions", async ({ page }) => {
    await page.goto("https://www.leafground.com/drag.xhtml", {
        waitUntil: "domcontentloaded"
    });
    await page.mouse.click(100,100);
    console.log("Single click completed");
    await page.mouse.dblclick(200,200);
    console.log("Double click completed");
    await page.mouse.move(500,300);
    console.log("Mouse moved");

});


test("Right Click", async ({ page }) => {
    await page.goto("https://www.leafground.com/drag.xhtml", {
        waitUntil: "domcontentloaded"
    });
    await page.mouse.click(300,300,{
        button:"right"
    });
    console.log("Right click completed");

});


test("Mouse Hold", async ({ page }) => {
    await page.goto("https://www.leafground.com/drag.xhtml", {
        waitUntil: "domcontentloaded"
    });
    await page.mouse.move(400,400);
    await page.mouse.down();
    await page.waitForTimeout(2000);
    await page.mouse.up();
    console.log("Mouse hold completed");
});