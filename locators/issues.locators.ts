import { Locator, Page } from "@playwright/test";
import { Click } from "../utils/Page.utils";
export class IssuePageLocators{
    readonly page :Page;
    readonly issues : Locator;
    constructor(page:Page,randomName:string){
        this.page = page;
        this.issues= page.locator('.blankslate-spacious');
    }

    async click() {
        Click(this.page,this.issues);
    }

    
}