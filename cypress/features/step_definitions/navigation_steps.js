import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import helper from "../../utils/helper";
let currentPage;

Given("the user navigates to the {string} page", (page) => {
    currentPage = helper.setCurrentPage(page);
    currentPage.visit();
})

Then("the {string} page should be displayed", () => {
    cy.url().should("contain","magento.softwaretestingboard.com")
})