const selector = require("../fixtures/selector.json");
const user = require("../fixtures/user.json");
const sessions = require("../fixtures/sessions.json");

it("Should find a hall with ticket sales", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.logIn(user.validEmail, user.validPassword);
    cy.contains(sessions.hallsManagement).should("be.visible");
    cy.get(selector.openingСinemaРall).contains(sessions.nameMovie);
    cy.visit("/");
    cy.get(selector.chooseTimeSession).click();
    cy.get(selector.chooseFilm).contains(sessions.timeSession).click();
    cy.contains(sessions.timeSession).should("be.visible");
    cy.get(selector.chooseChair).click();
    cy.get(selector.pushButton).click();
    cy.get(selector.pushButton).contains(sessions.takeTicket);
});
