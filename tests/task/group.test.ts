import { test } from "@playwright/test";

test.describe("E-Commerce", () => {

    test.describe("Authentication", () => {
        test("Login", async ({ page }) => {});
        test("Logout", async ({ page }) => {});
    });

    test.describe.skip("Shopping", () => {
        test("Search", async ({ page }) => {});
        test("Cart", async ({ page }) => {});
    });

});