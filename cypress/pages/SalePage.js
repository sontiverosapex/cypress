import BasePage from "./BasePage";

class SalePage extends BasePage {

    // WEB ELEMENTS
    pageTitle = ".base";

    // WEB ACTIONS
    visit() {
        cy.visit("/sale.html");
    }

}

export default SalePage;