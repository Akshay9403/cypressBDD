import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
Given('User on login Page', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
})
When('User Enter UserName',()=>{
    cy.get('#txtUsername').type('admin')
})
When('User Enter Password',()=>{
    cy.get('#txtPassword').type('aadmin123')
})
When('Click on Submit Button',()=>{
    cy.get('#btnLogin').click()
})
Then('User Should See Dashboard Logo',()=>{
    cy.get('#branding > a:nth-child(1) > img').should('be.visible')
})
Then('User Should See Invalid Text',()=>{
    cy.get('#spanMessage').should('have.text','Invalid credentials')
})