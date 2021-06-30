#Feature: Register Functionality.
#
#  As a user I should be able to register successfully.
#
#
#
#@Sanity
#  Scenario: User should be able to register successfully.
#    Given I am on homepage.
#    And I click on 'Register' tab on homepage.
#    And I navigate successfully to 'Register' page
#    When I select gender 'female'
#    And I enter "Prime" as 'Firstname'
#    And I enter "Time" as 'Lastname'
#    And I select DOB as "4",MONTH as "3",YEAR as "1995"
#
#    And I enter 'Email' as "primetime@gmail.com"
#    And I 'Company name' as "primeTime"
#    And I enter 'password' as "primetime001"
#    And I enter same password in 'confirmpassword' as "primetime001"
#    And I click on 'REGISTER' button
#    Then I should register successfully and I should see message 'Your registration completed'
#
#
#@Smoke
#Scenario: User should not able to register without First name
#  Given I am on homepage
#  And I click on 'Register' tab on homepage.
#  And I navigate successfully to 'Register' page
#  When I click on 'REGISTER' button
#  Then I should see text "First name is required."below firstname field
