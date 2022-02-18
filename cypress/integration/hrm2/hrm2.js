
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('User at login page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
When('User enter username as {string} and Password as {string}',(username,Password)=>{
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(Password)
})
And('Click on login Button',()=>{
    cy.get('#btnLogin').click()
})
Then('User Should login sucessfully',()=>{
    cy.get('#branding > a:nth-child(1) > img').should('be.visible')
})



// Given User at login page
//         When User enter username as <username> and Password as <Password>
//         And Click on login Button
//         Then User Should login sucessfully