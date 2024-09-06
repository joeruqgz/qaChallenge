import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {registerPage} from '@pages/RegisterPage'

Given("Se ingresa a la pagina de registro", () => {
  cy.visit("/register");
});

When("ingreso el correo {string}, la clave {string}, y hago click en el boton register", (username,password) => {
  registerPage.submitRegister(username,password)
  
});

Then("se muestra mensaje correcto de registro {string}", (message) => {
  registerPage.elements.message().should("have.text", 'SAVED');
});

Then("se muestra mensaje error de registro {string}", (errorMessage) => {
  registerPage.elements.message().should("have.text", 'INVALID');
});

Then("se muestra mensaje error de registro campos vacios {string}", (errorMessage) => {
  registerPage.elements.message().should("have.text", 'REQUIRED');
});

When("no ingreso el correo, ni la clave, y hago click en el boton register", () => {
  registerPage.emptyRegister()
  
});

When("no ingreso el correo, la clave {string}, y hago click en el boton register", (password) => {
  registerPage.emptyPass(password)
  
});

When("ingreso el correo {string}, no la clave, y hago click en el boton register", (username) => {
  registerPage.emptyUser(username)
  
});


