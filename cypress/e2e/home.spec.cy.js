import * as homePage from '../pages/homePage.js';

describe('Google Home Page', () => {
    beforeEach(() => {
        cy.visit('https://google.com');
    });

    it('should allow all home page to be accessible', () => {
        cy.title().should('eq', 'Google');
        homePage.googleLogo().should('be.visible');
        homePage.searchBar().should('be.visible');
        homePage.googleSearchButton().should('be.visible');
        homePage.imFeelingLuckyButton().should('be.visible');
        homePage.footer().should('be.visible');
        homePage.heading().should('be.visible');
        homePage.signInButton().should('be.visible');
    });
    
    describe('Homepage Links', () => {
      it('clicking Gmail link should redirect user to correct url', () => {
        homePage.gmailButton().click();
        cy.url().should('eq', 'https://www.google.com/gmail/about/');
      });
    
      it('clicking Images link should redirect user to correct url', () => {
        homePage.imagesButton().click();
        cy.url().should('contain', '/imghp');
      });
    });

    describe('Search Functionality', () => {
      it('should display search results when searching for Cars and clicking google search button', () => {
        homePage.searchBar().type('Cars').type('{esc}');
        homePage.googleSearchButton().click();
        cy.title().should('contain', 'Cars');
      });

      it('should redirect to Cars.com website when searching for Cars and clicking im feeling lucky button', () => {
        homePage.searchBar().type('Cars').type('{esc}');
        homePage.imFeelingLuckyButton().click();
        cy.title().should('contain', "New Cars");
        cy.url().should('eq', 'https://www.cars.com/');
      });
    });
    
    //actual login omitted - see comments below
    describe('iFrame Modal', () => {
      it('should dismiss modal when clicking on No Thanks button', () => {
        cy.get('[name="callout"]')
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then(body => {
            cy.wrap(body).find('.M6CB1c.rr4y5c').click()
          });
        cy.get('[name="callout"]').should('not.be.visible');
      });

      //FAIL: seems like google does not like when we modify the dom. new tab does not open in current tab
      it('should open new tab when clicking on Sign In button', () => {
        cy.get('[name="callout"]')
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then(body => {
            //remove target attribute so it opens new tab in current tab
            cy.wrap(body).find('.M6CB1c.yZqNl').invoke('attr', 'target', '_self').click()
            cy.url().should('contain', 'accounts.google.com/v3/signin/')
          });
      });
    });
});
