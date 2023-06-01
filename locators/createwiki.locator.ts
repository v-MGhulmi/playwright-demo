import { Locator, Page } from "@playwright/test";
import { Click, Fill } from "../utils/Page.utils";
export class CreateWikiLocators{
    readonly page :Page;
    readonly content :Locator;
    readonly newwikibutton :Locator;
    readonly ready :Locator;
    constructor(page:Page){
        this.page = page;
        this.content = page.locator('#gollum-editor-body');
        this.newwikibutton = page.locator('#gollum-editor-submit');
        this.ready = page.locator('.UHfVg');
    }

    async click(){
        //await this.ready.waitFor({state:'visible'});
        await Click(this.page,this.newwikibutton);
    }
    async fillcontent(name:string){
        await Fill(name,this.content)
    }
}