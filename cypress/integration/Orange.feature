Feature: OrangeHRM login page

    I am on login page

    Scenario: verify login with valid credencial
        Given User on login Page
        When User Enter UserName
        And User Enter Password
        And Click on Submit Button
        Then User Should See Dashboard Logo
  @focus
    Scenario: verify login with Invalid credencial
        Given User on login Page
        When User Enter UserName
        And User Enter Password
        And Click on Submit Button
        Then User Should See Invalid Text