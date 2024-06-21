import {Given, When, Then, And, After} from "cypress-cucumber-preprocessor/steps";
import helper from "../../utils/helper";

Then("the user clicks the {string} element", (element) => {
    global.currentPage.click(helper.camelCase(element));
});