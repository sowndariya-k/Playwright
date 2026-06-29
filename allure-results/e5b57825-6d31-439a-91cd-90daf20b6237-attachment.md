# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task\skip.test.ts >> Soft Assertion Demo
- Location: tests\task\skip.test.ts:31:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('link', { name: 'Log out' })
Expected: "Logout"
Received: "Log out"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveText" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })
    14 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "Log out"

```

```yaml
- link "Log out":
  - /url: "#"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Welcome Admin"
Received: "Welcome sowndariya"
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | 
  3  | test("Login test1",async({page}) =>{
  4  |     await page.goto("https://demoblaze.com/");
  5  |     await page.click("#login2")
  6  |     await page.locator('#loginusername').fill('sowndariya');
  7  |     await page.locator('#loginpassword').click();
  8  |     await page.locator('#loginpassword').fill('Sow@911!');
  9  |     await page.getByRole('button', { name: 'Log in' }).click();
  10 | 
  11 |     await expect(page.getByRole("link",{name: "Log out"})).toBeVisible();
  12 |     await expect(page.getByRole("link",{name: "Log out"})).toHaveText("Log out");
  13 |     const welcomeText=await page.locator("#nameofuser").textContent();
  14 |     expect(welcomeText).toBe("Welcome sowndariya")
  15 | });
  16 | test.skip("Login test2",async({page}) =>{
  17 |     test.skip (true, "Module under development");
  18 |     await page.goto("https://demoblaze.com/");
  19 |     await page.click("#login2")
  20 |     await page.locator('#loginusername').fill('sowndariya');
  21 |     await page.locator('#loginpassword').click();
  22 |     await page.locator('#loginpassword').fill('Sow@911!');
  23 |     await page.getByRole('button', { name: 'Log in' }).click();
  24 | 
  25 |     await expect(page.getByRole("link",{name: "Log out"})).toBeVisible();
  26 |     await expect(page.getByRole("link",{name: "Log out"})).toHaveText("Log out");
  27 |     const welcomeText=await page.locator("#nameofuser").textContent();
  28 |     expect(welcomeText).toBe("Welcome sowndariya")
  29 | });
  30 | 
  31 | test("Soft Assertion Demo", async ({ page }) => {
  32 |     await page.goto("https://demoblaze.com/");
  33 | 
  34 |     await page.click("#login2");
  35 |     await page.locator("#loginusername").fill("sowndariya");
  36 |     await page.locator("#loginpassword").fill("Sow@911!");
  37 |     await page.getByRole("button", { name: "Log in" }).click();
  38 | 
  39 |     // Pass
  40 |     await expect.soft(page.getByRole("link", { name: "Log out" })).toBeVisible();
  41 | 
  42 |     //fail
  43 |     await expect.soft(page.getByRole("link", { name: "Log out" })).toHaveText("Logout");
  44 | 
  45 |     const welcomeText = await page.locator("#nameofuser").textContent();
  46 |     //fail
> 47 |     expect.soft(welcomeText).toBe("Welcome Admin");
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  48 | 
  49 |     console.log("Execution continued after soft assertion failures.");
  50 |     await expect.soft(page.locator("#nameofuser")).toBeVisible();
  51 | });
```