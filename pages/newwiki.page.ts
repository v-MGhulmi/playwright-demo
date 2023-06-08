import {  Page } from '@playwright/test';
import { NewWikiPageLocators } from '../locators/newwiki.locator';
export class NewWikiDisplayPage {
    readonly page : Page;
    readonly repoLocator :NewWikiPageLocators;

    constructor(page:Page){
        this.page = page;
        this.repoLocator = new NewWikiPageLocators(page);
    }
}