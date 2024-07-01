import BasePage from "./BasePage";

class WomenPage extends BasePage {

    // WEB ELEMENTS
    pageTitle = ".base";
    tops = "dd > .items > :nth-child(1) > a";

    // WEB ACTIONS
    visit() {
        cy.visit("/women.html");
    }

}

export default WomenPage;