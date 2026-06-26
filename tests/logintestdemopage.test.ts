import { test } from "@playwright/test";

test("Login Test Demo", async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.demoblaze.com/");
  await page.click("//a[@id='login2']");
  await page.fill("//input[@id='loginusername']", "sowndariya");
  await page.fill("//input[@id='loginpassword']", "Sow@911!");
  await page.click("//button[text()='Log in']");

  console.log("Page Current url: ", page.url());
  console.log("Page title: ", await page.title());

  await page.waitForTimeout(5000);

  const page1 = await context.newPage();
  await page1.goto("https://www.demoblaze.com/cart.html");
  await page1.waitForTimeout(5000);

  console.log("Page1 Current url: ", page1.url());
  console.log("Page1 title: ", await page1.title());

  await context.close(); // ✅ close context, not browser (fixture manages browser)
});
