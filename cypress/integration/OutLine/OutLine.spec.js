import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
Cypress.on('uncaught:exception',()=>{
    return false
})
Given('open the url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('enter the {string}', (userName) => {
    cy.get('[name="username"]').type(userName)
})

And('enter the pass {string}', (password) => {
    cy.get('[type="password"]').type(password)
})

Then('Click On login button', () => {
    cy.get('[type="submit"]').click()
})

Then('validate the logo', () => {
    cy.get('[class="oxd-brand-banner"]').should('be.visible')
})
