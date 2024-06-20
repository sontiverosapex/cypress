import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import helper from "../../utils/helper";

Then("the {string} element should be displayed", (element) => {
    global.currentPage.elementIsVisible(helper.camelCase(element));
})