require("@4tw/cypress-drag-drop")

describe('template spec', () => {
  //click,rightclick,doubleclick,drag and drop , scroll
  it.skip('mousehover', () => {
    cy.visit('https://www.amazon.in/') 
    cy.get('[href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"]')
    .trigger("mousehover").click()
    

  })

  it.skip("rightclk",()=>{
  
     cy.visit("https://demo.guru99.com/test/simple_context_menu.html")

    //  cy.get('.context-menu-one').trigger("contextmenu")
    cy.get('.context-menu-one').rightclick()
     cy.wait(2000)
     cy.get('.context-menu-icon-quit').click()
     cy.wait(2000)

     cy.get('button').trigger("dbclick")


  }) 

  it.skip("drag and drop",()=>{
  
      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")  

      cy.get('#box3').drag("#box103",{force:true})
      cy.get("#box6").drag("#box106",{force:true})

  }) 

  it("scroll",()=>{

   cy.visit("https://infinite-scroll.com/demo/full-page/")

   cy.wait(2000)

   cy.scrollTo("bottom")

   cy.get(':nth-child(5) > :nth-child(2) > a > img').scrollIntoView({duration:2000}) 




  })




 

})