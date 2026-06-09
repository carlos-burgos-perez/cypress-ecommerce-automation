import ProductsPage from '../../pages/ProductsPage'; 
import CartPage from '../../pages/CartPage'; 

describe('Add Product To Cart', () => { 
  
  beforeEach(() => { 
    cy.login(
      Cypress.env('username'),
      Cypress.env('password')
    );
  }); 
  
  it('should add a product to cart', () => { 
    ProductsPage.addBackpackToCart(); 
    ProductsPage.openCart(); 
    CartPage.verifyItemInCart( 'Sauce Labs Backpack' ); 
  }); 

});