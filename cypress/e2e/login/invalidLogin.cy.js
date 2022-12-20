const user = require("../../fixtures/user.json");
const sessions = require("../../fixtures/sessions.json");

describe("loginIn admin", () => {
beforeEach(() => {
        cy.visit("/admin/index.php");
});

it("Should not log in with invalid data", () => {
  cy.logIn(user.invalidEmail, user.invalidPassword);
  cy.contains(sessions.authorizationError);
});
});