import LoginPage from '../../pages/LoginPage'; 

describe('Successful Login', () => { 
  
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
  
  it('should login successfully', function () { 
    LoginPage.visit(); 
    LoginPage.login( 
      this.users.validUser.username, 
      this.users.validUser.password ); 
    cy.url().should('include', '/inventory'); 
  });
  
});