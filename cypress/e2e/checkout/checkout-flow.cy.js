import ProductsPage from '../../pages/ProductsPage'; 
import CartPage from '../../pages/CartPage'; 
import CheckoutPage from '../../pages/CheckoutPage'; 

describe('Complete Checkout Flow', () => { 
  
  beforeEach(() => { 
    cy.login( 'standard_user', 'secret_sauce' ); 
  }); 
  
  it('should complete an order successfully', () => { 
    ProductsPage.addBackpackToCart(); 
    ProductsPage.openCart(); CartPage.clickCheckout(); 
    CheckoutPage.fillCustomerInformation( 'Carlos', 'Burgos', '03440' ); 
    CheckoutPage.continueCheckout(); 
    CheckoutPage.finishCheckout(); 
    CheckoutPage.verifyOrderCompleted(); 
  }); 

});