describe('template spec', () => {
  it.skip('radio button', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')

    cy.get("#male").check().should("be.checked")

    cy.get("#female").check().should("be.checked")

    cy.get("#male").should("not.be.checked")


  }) 
  it("checkbox",()=>{
    cy.visit('https://testautomationpractice.blogspot.com/') 

    cy.get("#sunday").check().should("be.checked") 

    cy.wait(2000)

    cy.get("#sunday").uncheck().should("not.be.checked")

    cy.get(".form-check-input[type='checkbox']").check().should("be.checked")

    cy.wait(2000)
    cy.get(".form-check-input[type='checkbox']").uncheck().should("not.be.checked") 
    cy.wait(2000)

    cy.get(".form-check-input[type='checkbox']").first().check()

    cy.get(".form-check-input[type='checkbox']").last().check() 

    cy.get(".form-check-input[type='checkbox']").eq(3).check()


  })





})