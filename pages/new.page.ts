import { expect, Locator, Page } from '@playwright/test';
import { NewRepoLocators } from '../locators/newrepo.locator';
export class NewPage {
    readonly url = "https://github.com/new"
    readonly page : Page;
    readonly locator: NewRepoLocators;

    constructor(page:Page){
        this.page = page
        this.locator = new NewRepoLocators(page)
    }

    async gotoNewRepoPage(){
        await this.page.goto(this.url)

    }

    async newRepo(repoName:string){
        await this.locator.fillreponame(repoName);
        await this.locator.click();
    }
}