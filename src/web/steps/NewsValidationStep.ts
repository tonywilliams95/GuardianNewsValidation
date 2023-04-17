import { Given, Then, When } from "@cucumber/cucumber";
import NewsPage from "../pages/NewsPage";
import BBCNewsPage from "../pages/BBCNewsPage";
import GoogleNewsPage from "../pages/GoogleNewsPage";


let news;

Given('a news article from The Guardian website', async function () {
    await new NewsPage(this.web).navigateToHomePage();
});

When('I check the validity of the news article', async function () {
     news =await new NewsPage(this.web).getAllNewsTitles();
})

Then('the news article should be confirmed as valid by at least two independent sources', async function () {
    await new BBCNewsPage(this.web).navigateToBBCNews();
    await new BBCNewsPage(this.web).validateNewsTitlesAreValid(news);
})

When('I search for similar information on Google or other resources', async function () {
    news =await new NewsPage(this.web).getAllNewsTitles();

})


Then('if no articles exist, the news article is considered invalid', async function () {
    await new GoogleNewsPage(this.web).navigateToGoogleNews();
    await new GoogleNewsPage(this.web).validateNewsTitlesAreValid(news);
})