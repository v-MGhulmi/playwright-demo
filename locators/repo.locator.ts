import { Locator, Page } from "@playwright/test";
import { Click } from "../utils/Page.utils";
export class RepoPageLocators{
    readonly page :Page;
    readonly repoName :Locator;
    readonly issues : Locator;
    readonly wiki : Locator;
    readonly settings: Locator;
    constructor(page:Page,randomName:string){
        this.page = page;
        this.repoName = page.getByRole('link', { name: 'test-repo'+randomName });
        this.issues= page.locator('#issues-tab');
        this.wiki = page.locator("#wiki-tab");
        this.settings = page.locator("#settings-tab")
    }

    async clickissue() {
        await Click(this.page,this.issues);
    }
    
    async clickwiki(){
        await Click(this.page,this.wiki)
    }

    async clickSettings(){
        await Click(this.page,this.settings)
    }

    
}