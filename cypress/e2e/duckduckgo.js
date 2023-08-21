const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I visit duckduckgo.com", () => {
  cy.visit("https://www.demoblaze.com/");

});

When("hacer sing up", () => {
  cy.contains('a', 'Sign up').click()
  cy.get('input#sign-username').invoke('val','cucumber')
  cy.get('input#sign-password').invoke('val','cucumber')
  cy.contains('button', 'Sign up').click()
  cy.wait(2000)
  
  cy.on("window:alert", (text) => {
    // Verifica el texto de la alerta
    expect(text).to.equal("Texto esperado de la alerta");
  });

});

