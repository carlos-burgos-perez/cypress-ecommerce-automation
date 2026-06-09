import LoginPage from '../../pages/LoginPage'; 

describe('Failed Login', () => { 
  
  before(function () {
    cy.fixture('users').then((users) => {
      this.users = users;
    });
  });
  
  beforeEach(() => { 
    cy.login(
      Cypress.env('username'),
      Cypress.env('password')
    );
  }); 
  
  it('should display an error message', function () { 
    LoginPage.visit(); 
    LoginPage.login( this.users.invalidUser.username, this.users.invalidUser.password ); 
    cy.get('[data-test="error"]') .should('be.visible'); 
  }); 

});