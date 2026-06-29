import {test, expect} from "@playwright/test"

test("Login test1",async({page}) =>{
    await page.goto("https://demoblaze.com/");
    await page.click("#login2")
    await page.locator('#loginusername').fill('sowndariya');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('Sow@911!');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByRole("link",{name: "Log out"})).toBeVisible();
    await expect(page.getByRole("link",{name: "Log out"})).toHaveText("Log out");
    const welcomeText=await page.locator("#nameofuser").textContent();
    expect(welcomeText).toBe("Welcome sowndariya")
});

test.skip("Login test2",async({page}) =>{
    test.skip (true, "Module under development");
    await page.goto("https://demoblaze.com/");
    await page.click("#login2")
    await page.locator('#loginusername').fill('sowndariya');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('Sow@911!');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByRole("link",{name: "Log out"})).toBeVisible();
    await expect(page.getByRole("link",{name: "Log out"})).toHaveText("Log out");
    const welcomeText=await page.locator("#nameofuser").textContent();
    expect(welcomeText).toBe("Welcome sowndariya")
});

test("Soft Assertion Demo", async ({ page }) => {
    await page.goto("https://demoblaze.com/");

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("sowndariya");
    await page.locator("#loginpassword").fill("Sow@911!");
    await page.getByRole("button", { name: "Log in" }).click();

    // Pass
    await expect.soft(page.getByRole("link", { name: "Log out" })).toBeVisible();

    //fail
    await expect.soft(page.getByRole("link", { name: "Log out" })).toHaveText("Logout");

    const welcomeText = await page.locator("#nameofuser").textContent();
    //fail
    expect.soft(welcomeText).toBe("Welcome Admin");

    console.log("Execution continued after soft assertion failures.");
    await expect.soft(page.locator("#nameofuser")).toBeVisible();
});