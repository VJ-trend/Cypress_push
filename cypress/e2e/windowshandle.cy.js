describe('template spec', () => {
  it.skip('passes', () => {
    
  cy.visit("https://the-internet.herokuapp.com/windows")
  cy.get('.example > a').invoke("removeAttr","target").click()

  })


  it("second method",()=>{

    cy.visit("https://the-internet.herokuapp.com/windows") 

    cy.get('.example > a').then((newwin)=>{

           let newlink =  newwin.prop("href")
           cy.visit(newlink)
//https://the-internet.herokuapp.com/windows - parent url
//https://the-internet.herokuapp.com/windows/new -child url

    })

  })




})