import { Locator, Page } from "@playwright/test";
import { Click } from "../utils/Page.utils";
export class NewWikiPageLocators{
    readonly page :Page;
    readonly content :Locator;
    constructor(page:Page,randomName:string){
        this.page = page;
        this.content= page.locator('.markdown-body');
        
    }
}