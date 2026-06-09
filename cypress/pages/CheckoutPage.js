class CheckoutPage { 
    
    fillCustomerInformation(firstName, lastName, zipCode) { 
        cy.get('[data-test="firstName"]').type(firstName); 
        cy.get('[data-test="lastName"]').type(lastName); 
        cy.get('[data-test="postalCode"]').type(zipCode); 
    } 
    
    continueCheckout() { 
        cy.get('[data-test="continue"]').click(); 
    } 
    
    finishCheckout() { 
        cy.get('[data-test="finish"]').click(); 
    } 
    
    verifyOrderCompleted() { 
        cy.contains('Thank you for your order').should('be.visible'); 
    } 
} 

export default new CheckoutPage();