class LoginPage {
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login"),
    message: () => cy.get('#msg'),
    
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
  emptyLogin(username,password){
    this.elements.usernameInput().should('have.value', '');
    this.elements.passwordInput().should('have.value', '');
    this.elements.loginBtn().click();
  }
  emptyUser(username){
    this.elements.usernameInput().type(username);
    
    this.elements.loginBtn().click();
  }
  emptyPass(password){
    
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}



export const loginPage = new LoginPage();
