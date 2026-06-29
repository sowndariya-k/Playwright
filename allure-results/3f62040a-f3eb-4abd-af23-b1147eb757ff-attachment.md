# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Timeout\waits.test.ts >> Wait for Invisibility
- Location: tests\Timeout\waits.test.ts:15:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Click I am about to hide' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: /dashboard.xhtml;jsessionid=node01akpsec5abw8i1bbadmfiptk6o19709405.node0
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
            - /url: "#j_idt44:j_idt45"
            - generic [ref=e37]: 
        - tab "" [ref=e38] [cursor=pointer]:
          - link "" [ref=e39]:
            - /url: "#j_idt44:j_idt48"
            - generic [ref=e40]: 
        - tab "" [ref=e41] [cursor=pointer]:
          - link "" [ref=e42]:
            - /url: "#j_idt44:j_idt57"
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
            - heading "Wait for Visibility (1 - 10 Sec)" [level=5] [ref=e156]
            - button "Click" [ref=e160] [cursor=pointer]:
              - generic [ref=e161]: Click
          - generic [ref=e162]:
            - heading "Wait for Invisibility (1 - 10 Sec)" [level=5] [ref=e163]
            - generic [ref=e165]:
              - button "Click" [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: Click
              - button "I am about to hide" [ref=e170] [cursor=pointer]:
                - generic [ref=e171]: I am about to hide
        - generic [ref=e172]:
          - generic [ref=e173]:
            - heading "Wait for Clickability" [level=5] [ref=e174]
            - generic [ref=e176]:
              - button "Click First Button" [ref=e178] [cursor=pointer]:
                - generic [ref=e179]: Click First Button
              - button "Click Second" [ref=e181] [cursor=pointer]:
                - generic [ref=e182]: Click Second
          - generic [ref=e183]:
            - heading "Wait for Text Change (1 - 10 Sec)" [level=5] [ref=e184]
            - generic [ref=e186]:
              - button "Click" [ref=e188] [cursor=pointer]:
                - generic [ref=e189]: Click
              - button "I am going to change!" [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: I am going to change!
      - generic [ref=e197]: 2022 - All Rights Reserved
  - generic [ref=e198]: 
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Wait for Visibility", async ({ page }) => {
  4  |     await page.goto("https://leafground.com/waits.xhtml");
  5  | 
  6  |     await page.locator("//span[text()='Click']").first().click();
  7  | 
  8  |     const button = page.locator("//span[text()='I am here']");
  9  | 
  10 |     await expect(button).toBeVisible();
  11 | 
  12 |     console.log("Button is visible");
  13 | });
  14 | 
  15 | test("Wait for Invisibility", async ({ page }) => {
  16 |     await page.goto("https://leafground.com/waits.xhtml");
  17 | 
> 18 |     await page.getByRole("button", { name: "Click I am about to hide" }).click();
     |                                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 | 
  20 |     const button = page.getByRole("button", { name: "I am about to hide" });
  21 | 
  22 |     await expect(button).toBeHidden();
  23 | 
  24 |     console.log("Button disappeared");
  25 | });
  26 | 
  27 | test("Wait for Clickable", async ({ page }) => {
  28 |     await page.goto("https://leafground.com/waits.xhtml");
  29 | 
  30 |     await page.getByRole("button", { name: "Click First Button" }).click();
  31 | 
  32 |     const secondButton = page.getByRole("button", { name: "Click Second" });
  33 | 
  34 |     await expect(secondButton).toBeEnabled();
  35 | 
  36 |     await secondButton.click();
  37 | 
  38 |     console.log("Second button clicked");
  39 | });
  40 | 
  41 | test("Wait for Text Change", async ({ page }) => {
  42 |     await page.goto("https://leafground.com/waits.xhtml");
  43 | 
  44 |     await page.getByRole("button", { name: "Click I am going to change!" }).click();
  45 | 
  46 |     const text = page.locator(".card:last-child span");
  47 | 
  48 |     await expect(text).toContainText("Did you notice?");
  49 | 
  50 |     console.log("Text changed");
  51 | });
```