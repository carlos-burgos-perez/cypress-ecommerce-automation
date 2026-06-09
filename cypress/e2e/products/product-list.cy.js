import ProductsPage from '../../pages/ProductsPage';

describe('Product List', () => {

   beforeEach(() => { 
    cy.login(
      Cypress.env('username'),
      Cypress.env('password')
    );
  }); 

  it('should display all available products', () => {

    ProductsPage.verifyProductsPageLoaded();

    ProductsPage.verifyProductsCount(6);

  });

  it('should display Sauce Labs Backpack', () => {

    ProductsPage.verifyProductVisible(
      'Sauce Labs Backpack'
    );

  });

  it('should sort products by price', () => {

    ProductsPage.sortByPriceLowToHigh();

    cy.get('.inventory_item_price')
      .first()
      .should('contain', '$7.99');

  });

});