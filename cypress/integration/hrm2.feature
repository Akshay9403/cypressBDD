Feature: login
Scenario Outline: Login to orangeHrm website
        Given User at login page
        When User enter username as '<username>' and Password as '<Password>'
        And Click on login Button
        Then User Should login sucessfully 

Examples:
    | username | Password | 
    | Admin  | admin123  |
    | Akshay| pardeshi|