import { expect, Locator, Page } from '@playwright/test';
import { HomePageLocators } from '../locators/homepage.locator';
export class HomePage {
    readonly url = "https://github.com"
    readonly page : Page;
    readonly NewRepoButton :HomePageLocators;

    constructor(page:Page){
        this.page = page
        this.NewRepoButton= new HomePageLocators(this.page)
    }

    async gotoHomePage(){
        await this.page.goto(this.url)

    }

    async newRepo(){
        await this.NewRepoButton.click()
    }
}