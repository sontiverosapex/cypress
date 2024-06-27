import BasePage from "./BasePage";

class HomePage extends BasePage {

    // WEB ELEMENTS

    // WEB ACTIONS
    visit() {
        cy.visit("/");
    }

}

export default HomePage;