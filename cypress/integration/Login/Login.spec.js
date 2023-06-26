import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
Cypress.on('uncaught:exception',()=>{
    return false
})
Given('Open the Orangehrm demo url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

Then('Fill the user-name', () => {
    cy.get('[name="username"]').type('Admin')
})

Then('Fill the password', () => {
    cy.get('[type="password"]').type('admin123')
})

Then('Click on login button', () => {
    cy.get('[type="submit"]').click()
})

When('Validate the sucessfull msg', () => {
    cy.get('[class="oxd-brand-banner"]').should('be.visible')
})


Given('Open the Orangehrm demo url.', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

Then('Fill the user-name.', () => {
    cy.get('[name="username"]').type('Admin')
})

Then('Fill the password.', () => {
    cy.get('[type="password"]').type('admin123')
})

Then('Click on login button.', () => {
    cy.get('[type="submit"]').click()
})
