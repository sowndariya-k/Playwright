# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Timeout\drag.test.ts >> Mouse Click Actions
- Location: tests\Timeout\drag.test.ts:34:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.leafground.com/drag.xhtml", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | test("Drag and Drop", async ({ page }) => {
  3  | 
  4  |     await page.goto("https://www.leafground.com/drag.xhtml");
  5  | 
  6  |     const draggable = page.locator("#form:drag_content");
  7  |     const droppable = page.locator("#form:drop");
  8  | 
  9  |     await draggable.dragTo(droppable);
  10 | 
  11 |     console.log("Drag completed");
  12 | 
  13 | });
  14 | 
  15 | test("Mouse Drag Action", async ({ page }) => {
  16 | 
  17 |     await page.goto("https://www.leafground.com/drag.xhtml");
  18 | 
  19 |     const source = page.locator("#form:drag_content");
  20 |     const target = page.locator("#form:drop");
  21 | 
  22 |     await source.hover();
  23 | 
  24 |     await page.mouse.down();
  25 | 
  26 |     await target.hover();
  27 | 
  28 |     await page.mouse.up();
  29 | 
  30 |     console.log("Mouse drag completed");
  31 | 
  32 | });
  33 | 
  34 | test("Mouse Click Actions", async ({ page }) => {
  35 | 
> 36 |     await page.goto("https://www.leafground.com/drag.xhtml");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  37 | 
  38 | 
  39 |     // single click
  40 |     await page.mouse.click(100,100);
  41 | 
  42 | 
  43 |     // double click
  44 |     await page.mouse.dblclick(200,200);
  45 | 
  46 | 
  47 |     // move mouse
  48 |     await page.mouse.move(500,300);
  49 | 
  50 | 
  51 |     console.log("Mouse actions completed");
  52 | 
  53 | });
  54 | 
  55 | test("Right Click", async ({ page }) => {
  56 | 
  57 |     await page.goto("https://www.leafground.com/drag.xhtml");
  58 | 
  59 |     await page.mouse.click(300,300,{
  60 |         button:"right"
  61 |     });
  62 | 
  63 | });
  64 | 
  65 | test("Mouse Hold", async ({ page }) => {
  66 | 
  67 |     await page.goto("https://www.leafground.com/drag.xhtml");
  68 | 
  69 | 
  70 |     await page.mouse.move(400,400);
  71 | 
  72 |     await page.mouse.down();
  73 | 
  74 |     await page.waitForTimeout(2000);
  75 | 
  76 |     await page.mouse.up();
  77 | });
```