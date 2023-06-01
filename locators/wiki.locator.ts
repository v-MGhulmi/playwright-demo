import { Locator, Page } from "@playwright/test";
import { Click } from "../utils/Page.utils";
export class WikiPageLocators{
    readonly page :Page;
    readonly create : Locator;
    constructor(page:Page,randomName:string){
        this.page = page;
        this.create= page.getByRole('link', { name: 'Create the first page' });
    }

    async click() {
        Click(this.page,this.create);
    }

    
}