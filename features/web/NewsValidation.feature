@regression
Feature: Validate News Article

  @regression @sanity
  Scenario: Verify the validity of a news article from The Guardian website
    Given a news article from The Guardian website
    When I check the validity of the news article
    Then the news article should be confirmed as valid by at least two independent sources

  @regression
  Scenario: Invalidating a news article from The Guardian website
    Given a news article from The Guardian website
    When I search for similar information on Google or other resources
    Then if no articles exist, the news article is considered invalid

  @wip
  Scenario: Handling exceptions
    Given an invalid URL for The Guardian website
    When I try to validate a news article
    Then an error message should be displayed indicating that the URL is invalid

  @wip
  Scenario Outline: Validating a news article with partially similar articles
    Given a news article from Guardian with partially similar articles on multiple resources
    When I search for similar information on Google or other resources
    Then the news article is considered valid

  Example: 
  |Source|MatchScore|ArticleToCheck|
  |Google|     60   |       3      |
  |BBC   |     50   |       2      |
