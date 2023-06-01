import { Locator, Page } from "@playwright/test";
import { Click } from "../utils/Page.utils";
export class HomePageLocators{
    readonly page :Page;
    readonly NewRepoButton: Locator;
    constructor(page:Page){
        this.page = page;
        this.NewRepoButton = this.page.getByRole('link', { name: 'New', exact: true })
    }

    async click(){
        await Click(this.page,this.NewRepoButton);
    }
}