const selector = require("../fixtures/selector.json");

describe("Should display the client's page correctly", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Should show correct title", () => {
      cy.get(selector.title).should('have.text', 'Идёмвкино');
    });

  it("Should show correct weekday", () => {
    cy.get(selector.dayOfWeek).should("have.length", 7);
  });

  it("Should show correct number of films", () => {
    cy.get(selector.chooseFilm).should("have.length", 2);
  });
});