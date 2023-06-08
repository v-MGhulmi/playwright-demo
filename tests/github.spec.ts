import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/home.page'
import { NewPage } from '../pages/new.page';
import { RepoDisplayPage } from '../pages/repodisplay.page';
import { IssuesDisplayPage } from '../pages/issues.page';
import { WikiDisplayPage } from '../pages/wiki.page';
import { CreateWikiPage } from '../pages/createwiki.page';
import { NewWikiDisplayPage } from '../pages/newwiki.page';
import { SettingsPage } from '../pages/settings.page';
import { userrepoPage } from '../pages/userrepo,page';
let homePage:HomePage
let reposPage:userrepoPage
test.describe('Github Tests',async () => {
  test.beforeEach(async ({page}) => {
    
    reposPage = new userrepoPage(page);
    homePage = new HomePage(page);
  
    // Click the get started link.
    
})

test('Create Repo', async ({ page },testInfo) => {
  const randomName =testInfo.project.name+ (Math.random() + 1).toString(36).substring(2);
  await homePage.gotoHomePage()
  await homePage.newRepo();
  const newpage = new NewPage(page);
  await newpage.newRepo('test-repo-create'+randomName);
  
  const repoPage = new RepoDisplayPage(page,"-create"+randomName)
  const testpara = repoPage.repoLocator.repoName;
  await expect(testpara).toBeVisible();

  });

/*test('Check Issues', async ({ page },testInfo) => {
  await reposPage.gotourl();
  await reposPage.search("test-repo-issue"+testInfo.project.name);
  await reposPage.locator.searchalert.waitFor({state:'visible'});
  const visible =await reposPage.locator.searchalert.innerText();
  let repoPage :RepoDisplayPage
  if(visible == "0 results for repositories matching test-repo-issue" +testInfo.project.name+" sorted by last updated"){
  const randomName = testInfo.project.name+(Math.random() + 1).toString(36).substring(2);
  await homePage.newRepo();
  const newpage = new NewPage(page);
  await newpage.newRepo('test-repo-issue'+randomName);
  
  repoPage = new RepoDisplayPage(page,"-issue"+randomName);
  }
  else{
    await reposPage.click();
    const reponame = reposPage.locator.repoName
    repoPage = new RepoDisplayPage(page,reponame);
  }
  await repoPage.repoLocator.clickissue();
  const issues = new IssuesDisplayPage(page);
  await expect(issues.issueLocator.issues).toBeVisible();
  

  
  });

test('Create Wiki page', async ({ page },testInfo) => {
  await reposPage.gotourl();
  await reposPage.search("test-repo-wiki"+testInfo.project.name);
  await reposPage.locator.searchalert.waitFor({state:'visible'});
  const visible =await reposPage.locator.searchalert.innerText();
  let repoPage :RepoDisplayPage
  const randomName = testInfo.project.name+(Math.random() + 1).toString(36).substring(2);
  if(visible == "0 results for repositories matching test-repo-wiki"+testInfo.project.name+" sorted by last updated"){
  
  await homePage.newRepo();
  const newpage = new NewPage(page);
  await newpage.newRepo('test-repo-wiki'+randomName);
  
  repoPage = new RepoDisplayPage(page,"-wiki"+randomName);
  }
  else{
    await reposPage.click();
    const reponame = reposPage.locator.repoName
    repoPage = new RepoDisplayPage(page,reponame);
  }
  await repoPage.repoLocator.clickwiki();
  const wiki = new WikiDisplayPage(page);
  await wiki.wikiLocator.click();
  const newwikipage = new CreateWikiPage(page);
  await newwikipage.newRepo(randomName);
  const wikipage = new NewWikiDisplayPage(page);
  await expect(wikipage.repoLocator.content).toBeVisible();


  

  
  });

  test('Delete repo', async ({ page },testInfo) => {
    await reposPage.gotourl();
    await reposPage.search("test-repo-delete"+testInfo.project.name);
    await reposPage.locator.searchalert.waitFor({state:'visible'});
    const visible =await reposPage.locator.searchalert.innerText();
    let repoPage :RepoDisplayPage
    const randomName = testInfo.project.name+(Math.random() + 1).toString(36).substring(2);
    let reponame:string
    if(visible == "0 results for repositories matching test-repo-delete"+testInfo.project.name+" sorted by last updated"){
  
    await homePage.newRepo();
    const newpage = new NewPage(page);
    await newpage.newRepo('test-repo-delete'+randomName);
  
    repoPage = new RepoDisplayPage(page,"-delete"+randomName);
    reponame = 'test-repo-delete'+randomName;
    }
    else{
      await reposPage.click();
      reponame = reposPage.locator.repoName
      repoPage = new RepoDisplayPage(page,reponame);
    }
      await repoPage.repoLocator.clickSettings();
      const settings = new SettingsPage(page);
      await settings.deleteRepo(reponame);
      const userrepos = new userrepoPage(page);
      await expect(userrepos.locator.alert).toBeVisible()
    
  
    });
  test('flakytest',async({page},testInfo) =>{
    const number = Math.floor(Math.random() * 101);
    console.log(number);
    await expect(number).toBeGreaterThan(50);
  });*/
  });