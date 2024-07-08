import { test, expect } from '@playwright/test';

// Define global variables to hold the context and page instances
let context, page;

test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://app.meetsoci.com/");

    await page.locator('input[placeholder="Email Address"]').fill('ayadav@meetsoci.com');
    await page.locator('input[placeholder="Password"]').fill('Ajay*141#');

    await page.locator('//button[normalize-space()="Sign In"]').click();

    await page.locator('#select2-chosen-4').click();

    await page.getByText('Ajay Yadav Demo Account').click();
});

test('TC_001', async () => {
    await page.locator('a[title="Settings"]').click();
    await page.locator("a[href='#account_configuration']").click();
    await page.locator(".white_button.set_genius_listings").click();
    const modal = await page.locator("div[class='ComarketerListingsBrandSettingsView bbm-wrapper'] div[class='bbm-modal bbm-modal--open']").innerText();
    expect(modal).toContain("Brand Settings");
});
test("TC_02",async()=>{
    await page.locator('a[title="Settings"]').click();
    await page.locator("a[href='#account_configuration']").click();
    await page.locator(".white_button.set_genius_listings").click();
    await page.locator('.primary_button.btn.gray_button.btn_add').click();
    await page.locator('input[placeholder="Customer Brand Name"]').fill("Esports132");
    await page.locator('div[class ="select2-container select2-container-multi original"]').click();
    await page.getByText('24/06 Test Loc').click();
    await page.locator(".primary_button.btn.gray_button.btn_save").click();

});
test('Tc_03',async()=>{
    await page.locator('a[title="Settings"]').click();
    await page.locator("a[href='#account_configuration']").click();
    await page.locator(".white_button.set_genius_listings").click();
   await page.locator('[ref="edit_button"]').last().click();
   await page.locator('input[placeholder="Customer Brand Name"]').fill("Esports1324");
   await page.locator(".primary_button.btn.gray_button.btn_save").click();

})
test('Tc_04',async()=>{
    await page.locator('a[title="Settings"]').click();
    await page.locator("a[href='#account_configuration']").click();
    await page.locator(".white_button.set_genius_listings").click();
    await page.locator('[ref="delete_button"]').last().click();
    await page.getByText("Confirm").click();
    await expect(page.locator('.notification_message')).toHaveText("Settings successfully deleted");
 })
 test.only('TC_07',async()=>{
    await page.locator(".sidebar_icon.listings_icon").click();
    await page.getByText("Genius Search").click();
    await expect(page.locator(".count_header").first()).toHaveText("Pending");
    await expect(page.locator(".count_header").last()).toHaveText("Dismissed");
    await expect(page.locator(".count_header").nth(1)).toHaveText("Accepted");
    await expect(page.locator('body')).toHaveText("Recommendation");
    //continue tommorow
 })
 test("TC_08",async()=>{
    console.log("dfghj");
 })


test.afterEach(async () => {
    // Clean up: Close the context after each test
    if (context) {
        await context.close();
    }
});
