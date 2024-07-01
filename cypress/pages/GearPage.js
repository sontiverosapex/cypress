import BasePage from "./BasePage";

class GearPage extends BasePage {

    // WEB ELEMENTS
    pageTitle = ".base";
    bags = "dd > .items > :nth-child(1) > a";

    // WEB ACTIONS
    visit() {
        cy.visit("/gear.html");
    }

}

export default GearPage;