Feature: Login Test

 As a User I want to login into nopcommerce website


  @Smoke
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When  I click on login link
   Then  I should navigate to login page successfully

 @Sanity
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "rickymartin@yahoo.com"
    And I enter password "password04"
    And I click on login button
   Then I should login successfully
@Regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | email             | password | errorMessage                                                                               |
      | abcd123@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again./n No customer account found |
      | y2k123@gmail.com  | abc123   | Login was unsuccessful. Please correct the errors and try again./n No customer account found |
      | adfa123@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again./n No customer account found |

