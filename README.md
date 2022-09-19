# QA Test Plan

## Google Web Application 

Effective: 09/18/22 

Document Author: Newas Azad (QA Team)

---

**Index**

1. Introduction
    
    a. Test Plan and Objectives
2. Scope
    
    a. Web
3. Test Strategy
    
    a. Google Web Application
    
    b. Documentation
4. Test Environment
    
    a. Agile/Scrum
5. Test Schedule
6. Resources and Resposibility
    
    a. Resources
    
    b. Responsibilities
7. Critical Test Cases
8. Potential App Improvements
---

1. **Introduction**
    
    A. Test Plan and Objectives
    
    *This document will outline the QA Teams plans in the upcoming year with regards adopting an agile scrum methodology. This document should help the necessary departments to gain a sense of the milestons that the QA team has established in order to accomplish the desired goals. It will outline the resources needed by the QA team.*

2. **Scope**
    
    A. Web Testing
        
        1. Performance (Load/Stress)
        2. Functional and Non-Functional
        3. API and Database Testing
        4. Retest (Defects)

3. **Test Strategy**
    
    A. Web Application
        
        1. QA team to coordinate with product owners/engineering team to identify upcoming features/stories so they may start writing test cases
        2. QA team to test stories locally when ready for QA status
        3. QA team to write automated tests where necessary
        4. Functional and Non-Functional requires full regression testing the UI and the functionality. This process needs to be tested manually and automated to perform as per best practices for customer facing products
        5. Ensure each ticket meets the Defintion of Done (Acceptance Criteria)

4. **Test Environment**
    
    A. Agile Scrum
    
    *QA Teams will adhere to the Agile Scrum methodology. This includes 2 week sprints and participating in all sprint ceremonies. QA is responsible for testing stories/tickets that developers have worked on as well as allocating some time for automation. QA will also utilize QA environments for majority of their tasks*

5. **Test Schedule**
    
    *Upon every commit/push should trigger CI/CD pipeline build, which contain a series of tests such as unit tests, integration tests, api tests. Upon merging code into master, will trigger the entire end-to-end tests. Builds must pass before deploying latest changes to other environments. Cron jobs will include running stress and load tests once a week*

6. **Resources/Tools and Responsibility**
    
    A. Resources
        
        1. Cypress (UI/Integration)
        2. Jest (Unit)
        3. Supertest (API)
        4. Postman (API)
        5. Webdriver/Protractor (UI/E2E)
        6. Jira (Sprint items and Defects)
        7. Bamboo (CI/CD)
    
    B. Responsibilities
        
        1. Newas to write test cases that also include edge cases
        2. Newas to write unit/api tests when necessary
        3. Newas to write automation and maintain cypress and webdriver frameworks
        4. Newas to ensure no pipeline builds are failing every morning

7. **Critical Test Cases**
    
    **Note**: Did not figure out how to create an actual table so ive trimmed the test steps

    | Test Case | Test Steps | Expected Result |
    | --- | --- | --- |       
    | Launch Google home page |  Launch http://www.google.com from browser          | User should be redirected to Google home page |
    | Search via Google Search|  Launch google website and type in Cars. Then click Goole Search button          | User should see relevant Cars search results |
    | Search via Im Feeling Lucky|  Launch google website and type in Cars. Then click Im Feeling Lucky button          | User should be redirected to Cars.com website |
    | Speech Recognition with Mic |  Launch google website and click allow mic. Then say cars| User should see relevant search results upon clicking Enter button |
    | Speech Recognition without Mic |  Launch google website and click block mic | User should not see any search results upon clicking block button |
    | All links on the Google home page (header, footer, etc)|  Launch google website and verify links exist and are clickable (About, Store, etc..)| Clicking hyperlinks should redirect user to the correct urls |
    | Successful Sign In |  Launch google website then click Sign In button. Enter valid user credentials         | User should be signed in to their account successfully |
    | Unsuccessful Sign In |  Launch google website then click Sign In button. Enter invalid user credentials | User should not be signed in to their account |

    Other test cases to consider: Successful logout; User sign up flow, Click Google Apps and verify contents, Click Google Apps and click More From Google button, etc...

8. **Potential App Improvements**
    
    1. All dom elements should have a data-qa-id attribute to ensure better automation testing practices
    2. Test early and conduct it often (work alongside devs/engineers and do not wait till end of sprint)
    3. Keep QA environments in good shape and bug free (Dev envs are polluted)
    4. Integrate test suites into CI/CD Pipelines
    5. Cross browser/platform testing
    6. Defects logged should contain very clear instructions and proof as well as any logs that may be useful to engineers
---

**NOTE: This is a very basic version of a test plan**


## How to run tests

1. Run `npm i` to install dependencies
2. Run `npm run cypress:open` to run tests in cypress gui
3. Run `npm run cypress:all` to run tests headless