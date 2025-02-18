describe("template spec", () => {
  it.skip("select tag", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    cy.get("#zcf_address_country")
      .select("Ghana")
      .should("have.value", "Ghana");
  });

  it.skip("without select tag", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    cy.get("#select2-billing_country-container").click();

    cy.get(".select2-search__field").focus().type("Iran").type("{enter}");
  });

  it("autosuggestions", () => {
    cy.visit("https://www.wikipedia.org/");

    cy.get("#searchInput").type("Chennai").should("have.value", "Chennai");
    cy.wait(3000);
    cy.get("h3.suggestion-title").each(($val,idx) => {
      if ($val.text().trim() === "Chennai Express") {
        cy.wrap($val).click();
      }
    });

    //forEach
    //syntax:
    //forEach((value,index,acctuaarray)=>)
  });
});
