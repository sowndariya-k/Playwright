# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Timeout\alerts.test.ts >> Sweet Modal Dialog
- Location: tests\Timeout\alerts.test.ts:56:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Modal Dialog')
Expected: visible
Error: strict mode violation: getByText('Modal Dialog') resolved to 2 elements:
    1) <h5>Sweet Modal Dialog</h5> aka getByRole('heading', { name: 'Sweet Modal Dialog' })
    2) <span class="ui-dialog-title" id="j_idt88:j_idt101_title">Modal Dialog (Sweet Alert)</span> aka getByText('Modal Dialog (Sweet Alert)')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Modal Dialog')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: /dashboard.xhtml;jsessionid=node01wfjevwg8bj3zdwgow8y40hn19711750.node0
      - text: 
      - link "" [ref=e5] [cursor=pointer]:
        - /url: "#"
        - generic [ref=e6]: 
    - generic [ref=e8]:
      - link [ref=e11] [cursor=pointer]:
        - /url: "#"
      - list [ref=e13]:
        - menuitem "" [ref=e14]:
          - link "" [ref=e15] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e16]: 
            - text: 
          - text:  
        - menuitem "" [ref=e17]:
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
            - text: 
          - text:    
        - menuitem "" [ref=e20]:
          - link "" [ref=e21] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e22]: 
            - text: 
          - text:       
        - menuitem "" [ref=e23]:
          - link "" [ref=e24] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e25]: 
            - text: 
          - text:    
        - menuitem "" [ref=e26]:
          - link "" [ref=e27] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e28]: 
            - text: 
          - text:   
        - menuitem "" [ref=e29]:
          - link "" [ref=e30] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e31]: 
            - text: 
          - text:    
    - generic [ref=e33]:
      - tablist [ref=e34]:
        - tab "" [expanded] [selected] [ref=e35] [cursor=pointer]:
          - link "" [ref=e36]:
            - /url: "#j_idt45:j_idt46"
            - generic [ref=e37]: 
        - tab "" [ref=e38] [cursor=pointer]:
          - link "" [ref=e39]:
            - /url: "#j_idt45:j_idt49"
            - generic [ref=e40]: 
        - tab "" [ref=e41] [cursor=pointer]:
          - link "" [ref=e42]:
            - /url: "#j_idt45:j_idt58"
            - generic [ref=e43]: 
      - generic [ref=e44]:
        - tabpanel [ref=e45]:
          - generic [ref=e46]: Settings
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]: 
              - generic [ref=e51]: NEW TRAINING
            - generic [ref=e52]:
              - generic [ref=e53]: 
              - generic [ref=e54]: SUCCESS STORIES
            - generic [ref=e55]:
              - generic [ref=e56]: 
              - generic [ref=e57]: UPCOMING SESSION
            - generic [ref=e58]:
              - generic [ref=e59]: 
              - generic [ref=e60]: TOTAL LEARNERS
            - generic [ref=e61]:
              - generic [ref=e62]: 
              - generic [ref=e63]: REBOOT CAREER
            - generic [ref=e64]:
              - generic [ref=e65]: 
              - generic [ref=e66]: YOUR MENTORS
        - text:  
    - generic [ref=e68] [cursor=pointer]: 
    - generic [ref=e69]:
      - heading "Menu Type" [level=5] [ref=e70]
      - generic [ref=e71]:
        - generic [ref=e73]:
          - radio "Static"
        - generic [ref=e76] [cursor=pointer]: Static
        - generic [ref=e78]:
          - radio "Overlay"
        - generic [ref=e81] [cursor=pointer]: Overlay
        - generic [ref=e83]:
          - radio "Horizontal"
        - generic [ref=e86] [cursor=pointer]: Horizontal
        - generic [ref=e88]:
          - radio "Slim"
        - generic [ref=e91] [cursor=pointer]: Slim
        - separator [ref=e92]
        - heading "Menu Color" [level=5] [ref=e93]
        - generic [ref=e95]:
          - radio "Light"
        - generic [ref=e98] [cursor=pointer]: Light
        - generic [ref=e100]:
          - radio "Dark"
        - generic [ref=e103] [cursor=pointer]: Dark
        - generic [ref=e105]:
          - radio "Gradient" [checked]
        - generic [ref=e108] [cursor=pointer]: Gradient
        - separator [ref=e109]
        - heading "User Menu Type" [level=5] [ref=e110]
        - generic [ref=e112]:
          - radio "Inline" [checked]
        - generic [ref=e115] [cursor=pointer]: Inline
        - generic [ref=e117]:
          - radio "Top"
        - generic [ref=e120] [cursor=pointer]: Top
        - separator [ref=e121]
        - heading "Input Style" [level=5] [ref=e122]
        - generic [ref=e124]:
          - radio "Outlined"
        - generic [ref=e127] [cursor=pointer]: Outlined
        - generic [ref=e129]:
          - radio "Filled" [checked]
        - generic [ref=e132] [cursor=pointer]: Filled
        - separator [ref=e133]
    - generic [ref=e134]:
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e137]: 
          - text: /
        - list [ref=e138]:
          - listitem [ref=e139]:
            - generic [ref=e140]: 
            - textbox "Search..." [ref=e141]
          - listitem [ref=e142]:
            - link "" [ref=e143] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e144]: 
          - listitem [ref=e145]:
            - link "" [ref=e146] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e147]: 
          - listitem [ref=e148]:
            - link "" [ref=e149] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e150]: 
      - generic [ref=e153]:
        - generic [ref=e154]:
          - generic [ref=e155]:
            - heading "Alert (Simple Dialog)" [level=5] [ref=e156]
            - button " Show" [ref=e157] [cursor=pointer]:
              - generic [ref=e158]: 
              - generic [ref=e159]: Show
          - generic [ref=e160]:
            - heading "Alert (Confirm Dialog)" [level=5] [ref=e161]
            - button " Show" [ref=e162] [cursor=pointer]:
              - generic [ref=e163]: 
              - generic [ref=e164]: Show
          - generic [ref=e165]:
            - heading "Sweet Alert (Simple Dialog)" [level=5] [ref=e166]
            - button " Show" [ref=e167] [cursor=pointer]:
              - generic [ref=e168]: 
              - generic [ref=e169]: Show
            - text:  
          - generic [ref=e170]:
            - heading "Sweet Modal Dialog" [level=5] [ref=e171]
            - button " Show" [active] [ref=e172] [cursor=pointer]:
              - generic [ref=e173]: 
              - generic [ref=e174]: Show
            - dialog "Modal Dialog (Sweet Alert)" [ref=e175]:
              - generic [ref=e176]:
                - text: Modal Dialog (Sweet Alert)
                - button "Close" [ref=e177] [cursor=pointer]:
                  - generic [ref=e178]: 
              - paragraph [ref=e180]: Unless you close this, you cannot interact with other element. But am inspectable !
        - generic [ref=e189]:
          - generic [ref=e190]:
            - heading "Alert (Prompt Dialog)" [level=5] [ref=e191]
            - button " Show" [ref=e192] [cursor=pointer]:
              - generic [ref=e193]: 
              - generic [ref=e194]: Show
          - generic [ref=e195]:
            - heading "Sweet Alert (Confirmation)" [level=5] [ref=e196]
            - button " Delete" [ref=e197] [cursor=pointer]:
              - generic [ref=e198]: 
              - generic [ref=e199]: Delete
          - generic [ref=e200]:
            - heading "Minimize and Maximize" [level=5] [ref=e201]
            - button " Show" [ref=e202] [cursor=pointer]:
              - generic [ref=e203]: 
              - generic [ref=e204]: Show
            - text:   
      - generic [ref=e209]: 2022 - All Rights Reserved
  - generic [ref=e210]: 
  - text:   
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | test("Simple Alert", async ({ page }) => {
  3  |     await page.goto("https://www.leafground.com/alert.xhtml");
  4  | 
  5  |     page.on("dialog", async dialog => {
  6  |         console.log(dialog.message());
  7  |         await dialog.accept();
  8  |     });
  9  | 
  10 |     await page.getByRole("button", { name: "Show" }).first().click();
  11 | });
  12 | 
  13 | test("Confirmation Alert - Accept", async ({ page }) => {
  14 |     await page.goto("https://www.leafground.com/alert.xhtml");
  15 | 
  16 |     page.on("dialog", async dialog => {
  17 |         console.log(dialog.message());
  18 |         await dialog.accept();
  19 |     });
  20 | 
  21 |     await page.locator("//span[text()='Show']").nth(1).click();
  22 | });
  23 | 
  24 | test("Confirmation Alert - Dismiss", async ({ page }) => {
  25 |     await page.goto("https://www.leafground.com/alert.xhtml");
  26 | 
  27 |     page.on("dialog", async dialog => {
  28 |         console.log(dialog.message());
  29 |         await dialog.dismiss();
  30 |     });
  31 | 
  32 |     await page.locator("//span[text()='Show']").nth(1).click();
  33 | });
  34 | 
  35 | test("Prompt Alert", async ({ page }) => {
  36 |     await page.goto("https://www.leafground.com/alert.xhtml");
  37 | 
  38 |     page.on("dialog", async dialog => {
  39 |         console.log(dialog.message());
  40 |         await dialog.accept("Sowndariya");
  41 |     });
  42 | 
  43 |     await page.locator("//span[text()='Show']").nth(4).click();
  44 | });
  45 | 
  46 | test("Sweet Alert", async ({ page }) => {
  47 |     await page.goto("https://www.leafground.com/alert.xhtml");
  48 | 
  49 |     await page.locator("//span[text()='Show']").nth(2).click();
  50 | 
  51 |     await expect(page.getByText("Dialog")).toBeVisible();
  52 | 
  53 |     await page.getByRole("button", { name: "Dismiss" }).click();
  54 | });
  55 | 
  56 | test("Sweet Modal Dialog", async ({ page }) => {
  57 |     await page.goto("https://www.leafground.com/alert.xhtml");
  58 | 
  59 |     await page.locator("//span[text()='Show']").nth(3).click();
  60 | 
> 61 |     await expect(page.getByText("Modal Dialog")).toBeVisible();
     |                                                  ^ Error: expect(locator).toBeVisible() failed
  62 | 
  63 |     await page.keyboard.press("Escape");
  64 | });
  65 | 
  66 | test("Delete Confirmation", async ({ page }) => {
  67 |     await page.goto("https://www.leafground.com/alert.xhtml");
  68 | 
  69 |     await page.getByRole("button", { name: "Delete" }).click();
  70 | 
  71 |     await page.getByRole("button", { name: "Yes" }).click();
  72 | });
  73 | 
  74 | 
  75 | 
  76 | test("Minimize and Maximize", async ({ page }) => {
  77 |     await page.goto("https://www.leafground.com/alert.xhtml");
  78 | 
  79 |     await page.locator("//span[text()='Show']").last().click();
  80 | 
  81 |     await expect(page.getByText("Min and Max")).toBeVisible();
  82 | 
  83 |     // Maximize
  84 |     await page.locator(".ui-dialog-titlebar-maximize").click();
  85 | 
  86 |     // Minimize
  87 |     await page.locator(".ui-dialog-titlebar-minimize").click();
  88 | });
```