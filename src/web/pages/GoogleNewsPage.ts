import UIActions from "../../support/playwright/actions/UIActions";
import Assert from "../../support/playwright/asserts/Assert";
import Log from "../../support/logger/Log";
import Constants from "../constants/Constants";
import NewsUtil from "../../support/utils/NewsUtil"

   ``
export default class GoogleNewsPage {
     constructor(private web: UIActions) { }
 
     private searchInput="#search-input";
    private AcceptButton = "//button/div[text()='Accept all']";
    private googleNews ="//a/h3";
 

    public async navigateToGoogleNews() {
         await this.web.goto("https://www.google.com", "News page");
         try {
          await this.web.element(this.AcceptButton, Constants.SEARCHBUTTON).click();
         } catch (error) {
          //  if an error occurs while clicking the button
          console.error("Error while clicking the button:", error);
        }
         const title=await this.web.getPageTitle();
        await Assert.assertEquals(title, "Google", "Title Validation");

    }


    public async validateNewsTitlesAreValid(newsArray: string[]){
        for (let i = 0; i < newsArray.length; i++) {
            let title = newsArray[i];
              const news=await NewsUtil.splitLivetitleNews(title);
            Log.info("News Searched as captured from Guardian - : " + news);
            await this.web.goto("https://www.google.com/search?q="+news, "News page");
            // await this.web.element(this.AcceptButton,Constants.SEARCHBUTTON).click();
            await this.web.waitForDomContentLoaded();
            const newsList = await this.web.element(this.googleNews, "News").getAllTextContent();
            for (let i = 0; i < 1; i++) {
                Log.info("News "+i+" - from othe sources: -> "+newsList[1]);
                const matchPercentage =  await NewsUtil.getMatchScore(news,newsList[i]);
               if (matchPercentage > 20) {
                Log.info("Valid match - "+ news);
              } else {
                Log.info("Less match -" +news);
                 throw new Error(`News Not valid with source Google`);
              }
            }
          } 
     }

}