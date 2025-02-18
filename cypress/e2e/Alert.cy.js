describe("template spec", () => {
  it("simple alert ", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");

    cy.get(":nth-child(1) > button").click();

    //simple alert
    cy.on("window:alert", (alerttext) => {
      expect(alerttext).to.contains("I am a JS Alert");
    });

    cy.wait(2000);

    //confirm alert

    cy.get(":nth-child(2) > button").click();

    cy.on("window:confirm", (confirmtext) => {
      expect(confirmtext).to.contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false);

    cy.get("#result").should("have.text", "You clicked: Cancel");

    //prompt alert

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("null");
    });

    cy.get(":nth-child(3) > button").click();
  });
});
