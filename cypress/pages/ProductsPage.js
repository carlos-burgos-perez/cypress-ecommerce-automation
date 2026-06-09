class ProductsPage {

    addBackpackToCart() { 
        cy.contains('Add to cart').first().click(); 
    }
    
    openCart() { 
        cy.get('.shopping_cart_link').click(); 
    }

    verifyProductsPageLoaded() {
        cy.url().should('include', 'inventory');
    }

    verifyProductsCount(expectedCount) {
        cy.get('.inventory_item')
        .should('have.length', expectedCount);
    }

    verifyProductVisible(productName) {
        cy.contains(productName)
        .should('be.visible');
    }

    sortByPriceLowToHigh() {
        cy.get('[data-test="product-sort-container"]')
        .select('lohi');
    }

}

export default new ProductsPage();