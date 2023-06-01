import { expect, Locator, Page } from '@playwright/test';
import { RepoPageLocators } from '../locators/repo.locator';
export class RepoDisplayPage {
    readonly page : Page;
    readonly repoLocator :RepoPageLocators;
    
    constructor(page:Page,randomName:string){
        this.page = page;
        this.repoLocator = new RepoPageLocators(page,randomName);
    }
}