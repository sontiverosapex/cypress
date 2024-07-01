import BasePage from "./BasePage";

class HomePage extends BasePage {

    // WEB ELEMENTS
    pageTitle = ".base";

    // WEB ACTIONS
    visit() {
        cy.visit("/");
    }

}

export default HomePage;