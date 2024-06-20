import BasePage from "./BasePage";

class HomePage extends BasePage {

    // WEB ELEMENTS
    shoppingCart = "[class='action showcart']";

    // WEB ACTIONS
    visit() {
        cy.visit("/");
    }

}

export default HomePage;