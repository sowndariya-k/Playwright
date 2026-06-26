import { chromium, test } from "@playwright/test";

test("Login Test Demo", async () => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/");//get url
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']", "sowndariya");
    await page.fill("//input[@id='loginpassword']", "Sow@911!");
    await page.click("//button[text()='Log in']");
    console.log("Page Current url: ",page.url());
    console.log("Page title: ",await page.title());

    //const source=await page.content()
    //console.log("Page content: ",source.substring(0,300));

    await page.waitForTimeout(5000);

    const page1 = await context.newPage();
    await page1.goto("https://www.demoblaze.com/cart.html");
    await page1.waitForTimeout(5000);
    console.log("Page Current url: ",page1.url());
    console.log("Page title: ",await page1.title());
    //const source1=await page1.content()
    //console.log("Page content: ",source1.substring(0,300));

    await browser.close();//quit browser
});
