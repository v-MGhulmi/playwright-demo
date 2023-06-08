import {  Page } from '@playwright/test';
import { UserRepoPageLocators } from '../locators/userrepos.locator';

export class userrepoPage {
    readonly url :string;
    readonly page : Page;
    readonly locator: UserRepoPageLocators;
    constructor(page:Page){
        this.url = "https://github.com/mohammadghulmi?tab=repositories"
        this.page = page
        this.locator = new UserRepoPageLocators(page)
    }

    async gotourl() {
        await this.page.goto(this.url);
        
    }

    async  search(content:string){
        await this.locator.searchrepos(content);
        
        
    }
    async click(){
        await this.locator.clickrepo();
    }
}