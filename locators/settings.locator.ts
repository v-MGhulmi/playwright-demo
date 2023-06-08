import { Locator, Page } from "@playwright/test";
import { Click, Fill } from "../utils/Page.utils";
export class SettengsPageLocators{
    readonly page :Page;
    readonly DeleteRepoButton: Locator;
    readonly ConfirmDeleteButton: Locator;
    readonly Verifacation: Locator;
    readonly confirmdialog : Locator;
    constructor(page:Page){
        this.page = page;
        this.DeleteRepoButton = this.page.locator('#dialog-show-repo-delete-menu-dialog');
        this.ConfirmDeleteButton = this.page.locator('#repo-delete-proceed-button');
        this.Verifacation = this.page.locator('#verification_field');
        this.confirmdialog = this.page.locator('#repo-delete-menu-dialog')
    }

    async clickDeleteButton(){
        await Click(this.page,this.DeleteRepoButton);
    }
    async clicklConfirmButton(){
        await Click(this.page,this.ConfirmDeleteButton);
    }
    async fillVerifaction(name:string){
        const content = "mohammadghulmi/"+name;
        await Fill(content,this.Verifacation);
    }
}