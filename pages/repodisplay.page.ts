import {  Page } from '@playwright/test';
import { RepoPageLocators } from '../locators/repo.locator';
export class RepoDisplayPage {
    readonly page : Page;
    repoLocator :RepoPageLocators;
    
    constructor(page:Page,randomName = ""){
        this.page = page;
        this.repoLocator = new RepoPageLocators(page,randomName);
    }

    setreponame(content:string) {
        this.repoLocator = new RepoPageLocators(this.page,content)
    }
}