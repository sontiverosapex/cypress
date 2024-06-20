import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import helper from "../../utils/helper";
global.currentPage = null;

Given("the user navigates to the {string} page", (page) => {
    global.currentPage = helper.setCurrentPage(page);
    global.currentPage.visit();
})