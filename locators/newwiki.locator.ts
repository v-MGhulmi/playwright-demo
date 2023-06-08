import { Locator, Page } from "@playwright/test";
export class NewWikiPageLocators {
  readonly page: Page;
  readonly content: Locator;
  constructor(page: Page) {
    this.page = page;
    this.content = page.locator(".markdown-body");
  }
}
