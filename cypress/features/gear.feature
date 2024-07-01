@gear
Feature: Gear

  @KAN-EXXX
  Scenario: The user navigates to the Gear Page
    Given the user navigates to the "gear" page
    And the "page title" element should be displayed
    Then the user clicks the "bags" element