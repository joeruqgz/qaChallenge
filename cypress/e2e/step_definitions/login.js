import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("Se ingresa a la pagina de login", () => {
  cy.visit("/login");
});

When("ingreso el correo {string}, la clave {string}, y hago click en el boton login", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When("no ingreso el correo , ni la clave , y hago click en el boton login", () => {
  loginPage.emptyLogin()
  
});

When("no ingreso el correo , la clave {string} , y hago click en el boton login", (password) => {
  loginPage.emptyPass(password)
  
});

When("ingreso el correo {string} , no clave , y hago click en el boton login", (username) => {
  loginPage.emptyUser(username)
  
});

Then("se muestra mensaje correcto {string}", (errorMessage) => {
  loginPage.elements.message().should("have.text", 'LOGIN VALID');
});

Then("se muestra mensaje error {string}", (errorMessage) => {
  loginPage.elements.message().should("have.text", 'INVALID');
});

Then("se muestra mensaje error campos obligatorios {string}", (errorMessage) => {
  loginPage.elements.message().should("have.text", 'REQUIRED');
});
