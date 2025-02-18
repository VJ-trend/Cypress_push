describe('Going to validate amazon', () => {  
  it.skip('implicit', () => {
    cy.visit('https://www.amazon.in/') 
    cy.url().should("equal","https://www.amazon.in/")
    cy.url().should("not.equal","https://www.flipkart.in/") 

    cy.title().should("eq","Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
     .and("not.eq","online") 
     .and("include","Onli")
     .and("contains","Shopping site")  


     cy.get("label[for='twotabsearchtextbox']~input").type("iphone16")
       .should("have.value","iphone16")    

     cy.get("#nav-logo-sprites").should("exist")
     cy.get('[href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"]').should("have.text","Sell")
     cy.get("#nav-xshop>a").should("have.length",32)
  })


  it("explicit",()=>{


    cy.visit('https://www.amazon.in/') 
     
    cy.get('[href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"]')
    .then((e)=>{
          let sell = e.text() 
          //Explicit 
          expect(sell).not.to.equal("sell")  //BDD
          assert(sell,"Sell") //TDD
    })





  })



})