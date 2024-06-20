@home
Feature: Home Page

  @KAN-E1
  Scenario: The user navigates to the Home Page
    Given the user navigates to the "home" page
    And the "search" element should be displayed
    Then the user clicks the "search" element
