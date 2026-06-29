import { test, expect } from "@playwright/test";
import path from "path";

test("Upload file", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download");
    const filePath = path.join("Downloads", "sample.jpeg");
    await page.locator("#uploadFile").setInputFiles(filePath);
    const uploadedFile = page.locator("#uploadedFilePath");
    await expect(uploadedFile).toContainText("sample.jpeg");
    console.log("File uploaded successfully");
});