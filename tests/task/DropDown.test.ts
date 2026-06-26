import {test, expect} from '@playwright/test';
test('DropDown select',async({page}) =>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo",{
        value: "Friday"
    })
    
    await page.waitForTimeout(3000);
    await page.selectOption("#multi-select",[
        {label:"Texas"},
        {index: 2},
        {value: "New Jersey"}
    ]);
    

});