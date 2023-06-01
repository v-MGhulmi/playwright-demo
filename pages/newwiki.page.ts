import { expect, Locator, Page } from '@playwright/test';
import { NewWikiPageLocators } from '../locators/newwiki.locator';
export class NewWikiDisplayPage {
    readonly page : Page;
    readonly repoLocator :NewWikiPageLocators;

    constructor(page:Page,randomName:string){
        this.page = page;
        this.repoLocator = new NewWikiPageLocators(page,randomName);
    }
}