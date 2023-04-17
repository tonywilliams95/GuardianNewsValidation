## Features
 framework supports Behavior Driven Development (BDD) with tests written in plain English using Gherkin syntax. It comes with built-in libraries for UI, API (SOAP & REST), and DB (MSSQL, DB2 & Oracle) testing.

With our framework, you can execute tests in different browsers and run scenarios in parallel mode with 2 scenarios running simultaneously by default. For flaky scenarios, you can set up retries until either the test passes or reaches the maximum number of attempts. Reruns of failed scenarios are also supported.

If you need to skip certain scenarios, simply add the @ignore tag. We also provide a dry run option to identify undefined and ambiguous steps.

Our framework includes utility for file download and reading PDF files. It generates Cucumber HTML Report and HTML Report with snapshots and videos in case of failed scenarios. All test execution logs are captured in the log file.

The framework configuration is controlled by the .env file, and environment variables can be modified at runtime. Integration with CI/CD tools like Jenkins is easy and simple.

## Supported Browsers

1. Chrome - default browser
2. Firefox
3. MS Edge
4. WebKit - web browser engine used by Safari


#### Steps to use
##### 1. Installation

To use the Playwright framework, you will need Node.js v14 or higher.

Next, install the dependencies using the following command:

```sh
npm ci
```
##### 2. Test creation
Framework organizes test scenarios into features, which should be placed in the features folder.

To connect Gherkin steps in feature files to the programming code, step definitions are used. These carry out the action that should be performed by the scenario steps. Step definitions should be placed in the steps folder in different packages.

For web UI-based tests, all selectors should be maintained inside the pages folder. This helps to keep the selectors organized and easily accessible.

To create a new test scenario, create a new feature file inside the features folder and add your test scenario steps using the Gherkin syntax. Then, create a new step definition in the steps folder and implement the code that performs the actions required for the scenario.

If you're creating a UI-based test, add the selectors to the pages folder and use them in your step definitions to interact with the UI elements.

With this framework, you can create powerful and maintainable test scenarios quickly and easily!

##### 3. Execution
To run test scenarios use below command.
```sh
npm run test
```
To run specific scenario, use tags command. Below are few examples.
```sh
npm run test:tags '@sanity'
npm run test:tags "@calculator or @author"
npm run test:tags "@rest and @author"
```
To dry run test scenarios use below command.
```sh
npm run dry:test
```
To rerun the failed test scenarios use below command.
```sh
npm run failed:test
```
To change any environment configuration in .env file at run time use set command.
Eg: To change browser to Firefox use below command
```sh
set BROWSER=firefox
```
Similar command can be used to update other environment configuration

To generate HTML and Cucumber report use below command
```sh
npm run report
```
##### 4. Report & Logs
Cucumber HTML report will be present inside
```sh
test-results/reports/cucumber.html
```
HTML report will be present inside
```sh
test-results/reports/html/index.html
```
Execution log will be present in the log file.
```sh
test-results/logs/execution.log
```

