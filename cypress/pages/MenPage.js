import BasePage from "./BasePage";

class MenPage extends BasePage {

    // WEB ELEMENTS
    pageTitle = ".base";
    tops = "dd > .items > :nth-child(1) > a";

    // WEB ACTIONS
    visit() {
        cy.visit("/men.html");
    }

}

export default MenPage;