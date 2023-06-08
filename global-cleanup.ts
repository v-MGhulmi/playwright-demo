import { chromium, FullConfig,  expect } from '@playwright/test';
import { userrepoPage } from './pages/userrepo,page';
import { SettingsPage } from './pages/settings.page';
import { RepoDisplayPage } from './pages/repodisplay.page';
async function globalcleanup(config: FullConfig) {
    //const baseURL = "https://github.com/";
    const {storageState} = config.projects[1].use;
    const browser = await chromium.launch({headless:false,});
    const context = await browser.newContext({storageState:storageState});
    await context.storageState({ path: storageState as string });
    const page = await context.newPage();
    let ThereAreNoResults = false;
    const repos = new userrepoPage(page);
    let visible :string;
    const settings = new SettingsPage(page);
    const userrepos = new userrepoPage(page);
    const repoPage = new RepoDisplayPage(page)
    while(!ThereAreNoResults){
    
    await repos.gotourl();
    await repos.search("test-repo");
    await repos.locator.searchalert.waitFor({state:'visible'});
    visible =await repos.locator.searchalert.innerText();
    
    if (visible == "0 results for repositories matching test-repo sorted by last updated"){
        ThereAreNoResults= true;
        continue;
    }
    await repos.click();
    const reponame = repos.locator.repoName
    repoPage.setreponame(reponame);
    await repoPage.repoLocator.clickSettings();
    
    await settings.deleteRepo(reponame);
    
    await expect(userrepos.locator.alert).toBeVisible()    
    }

}
export default globalcleanup;