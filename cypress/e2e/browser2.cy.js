describe('test login form', () => {
  it('login credits', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/') 

    cy.get("input[name='username']").type("student")
    cy.get('#password').type("Password123") 
 
    cy.get(".btn").click()


  })
})