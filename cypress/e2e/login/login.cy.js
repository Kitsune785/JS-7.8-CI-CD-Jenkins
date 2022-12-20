const user = require("../../fixtures/user.json");
const sessions = require("../../fixtures/sessions.json");

describe("loginIn admin", () => {
beforeEach(() => {
        cy.visit("/admin/index.php");
});

it("Should log in with valid data", () => {
  cy.logIn(user.validEmail, user.validPassword);
  cy.contains(sessions.hallsManagement);
});
});