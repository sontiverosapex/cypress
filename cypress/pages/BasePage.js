class BasePage {

    // WEB ELEMENTS
    elements = {
        //top menu
        supportThisProject: "",
        signIn: "",
        createAccount: "",
        search: "input[id='search']",
        shoppingCart: "a[class='action showcart']",

        //navigation
        whatsNew: "",
        women: "",
        men: "",
        gear: "",
        training: "",
        sale: ""
    }

    // WEB ACTIONS
    click(element) {
        cy.get(this.elements[element]).click();
    }

    elementIsVisible(element){
        cy.get(this.elements[element]).should("be.visible");
    }
}

export default BasePage;