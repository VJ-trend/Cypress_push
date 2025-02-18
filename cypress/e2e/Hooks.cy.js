describe("template spec", () => {
  //before
  //after
  //beforeEach
  //afterEach

  before("browser", () => {
    cy.log("Chromebrowser launched");

  });

  beforeEach("login", () => {
    cy.log("log in");
  });

  afterEach("log out", () => {
    cy.log("log out");
  });

  it("test1", () => {
    cy.log("logged in amazon");
  });

  it("test2", () => {
    cy.log("search for the product");
  });

  it("test3", () => {
    cy.log("Added to the cart");
  });

  after("close", () => {
    cy.log("chromeBrowser closed");
  });





  
});
