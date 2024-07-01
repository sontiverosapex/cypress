import BasePage from "./BasePage";

class WhatsNewPage extends BasePage {

    // WEB ELEMENTS
    pageTitle = ".base";

    // WEB ACTIONS
    visit() {
        cy.visit("/what-is-new.html");
    }

}

export default WhatsNewPage;