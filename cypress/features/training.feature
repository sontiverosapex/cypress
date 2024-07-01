@training
Feature: Training

  @KAN-EXXX
  Scenario: The user navigates to the Training Page 1
    Given the user navigates to the "training" page
    And the "page title" element should be displayed
    Then the user clicks the "video download" element