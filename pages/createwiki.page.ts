import { expect, Locator, Page } from '@playwright/test';
import { CreateWikiLocators } from '../locators/createwiki.locator';

export class CreateWikiPage {
    
    readonly page : Page;
    readonly locator: CreateWikiLocators;

    constructor(page:Page){
        this.page = page
        this.locator = new CreateWikiLocators(page)
    }

    async newRepo(repoName:string){
        await this.locator.fillcontent(repoName);
        await this.locator.click();
    }
}