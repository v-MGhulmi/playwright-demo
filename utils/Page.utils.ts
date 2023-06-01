import { test,Page, Locator } from "@playwright/test";
export async function Click(page:Page,locator:Locator){
        await locator.waitFor({state:'visible'});
        await locator.click();
}
export async function Fill(content:string,locator:Locator) {
    await locator.waitFor({state:'visible'});
    await locator.fill(content);
    
}