import {  Page } from '@playwright/test';
import { WikiPageLocators } from '../locators/wiki.locator';

export class WikiDisplayPage {
    readonly page : Page;
    readonly wikiLocator :WikiPageLocators;

    constructor(page:Page){
        this.page = page;
        this.wikiLocator = new WikiPageLocators(page);
    }
}