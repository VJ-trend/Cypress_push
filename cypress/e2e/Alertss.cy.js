describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get(':nth-child(1) > button').click()
  
    //simple alert 
    cy.on("window:alert",(e)=>{
   
       expect(e).to.contains("I am a JS Alert")
    }) 

    //confirm alert 
    cy.get(':nth-child(2) > button').click()

    cy.on("window:confirm",()=>false) //to click on cancel

    //prompt alert : 

    cy.window().then((win)=>{
      cy.stub(win,"prompt").returns("vijay") 
  })

    cy.get(':nth-child(3) > button').click()


  


  })
})