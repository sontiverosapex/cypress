import BasePage from "./BasePage";

class TrainingPage extends BasePage {

    // WEB ELEMENTS
    pageTitle = ".base";
    videoDownload = "dd > .items > .item > a";

    // WEB ACTIONS
    visit() {
        cy.visit("/training.html");
    }

}

export default TrainingPage;