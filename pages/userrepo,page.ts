import { expect, Locator, Page } from '@playwright/test';
import { UserRepoPageLocators } from '../locators/userrepos.locator';

export class userrepoPage {
    
    readonly page : Page;
    readonly locator: UserRepoPageLocators;

    constructor(page:Page){
        this.page = page
        this.locator = new UserRepoPageLocators(page)
    }
}