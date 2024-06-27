import BasePage from "./BasePage";

class GearPage extends BasePage {

    // WEB ELEMENTS

    // WEB ACTIONS
    visit() {
        cy.visit("/gear.html");
    }

}

export default GearPage;