class BasePage {

    // WEB ELEMENTS

    //top menu
    supportThisProject = "";
    signIn = "";
    createAccount = "";
    search = "input[id='search']";
    shoppingCart = "";

    //navigation
    whatsNew = "";
    women = "";
    men = "";
    gear = "";
    training = "";
    sale = "";

    // WEB ACTIONS
    click(element) {
        cy.get(this[element]).click();
    }

    elementIsVisible(element){
        cy.get(this[element]).should("be.visible");
    }
}

export default BasePage;