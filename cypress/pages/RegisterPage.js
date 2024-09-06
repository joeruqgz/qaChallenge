class RegisterPage {
    elements = {
      usernameInput: () => cy.get("#email"),
      passwordInput: () => cy.get("#password"),
      registerBtn: () => cy.get("#register"),
      message: () => cy.get('#msg'),
      
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickRegister() {
      this.elements.registerBtn().click();
    }
  
    submitRegister(username,password){
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.registerBtn().click();
    }
    emptyRegister(username,password){
      this.elements.usernameInput().should('have.value', '');
      this.elements.passwordInput().should('have.value', '');
      this.elements.registerBtn().click();
    }
    emptyUser(username){
      this.elements.usernameInput().type(username);
      
      this.elements.registerBtn().click();
    }
    emptyPass(password){
      
      this.elements.passwordInput().type(password);
      this.elements.registerBtn().click();
    }
  }
  
  
  
  export const registerPage = new RegisterPage();