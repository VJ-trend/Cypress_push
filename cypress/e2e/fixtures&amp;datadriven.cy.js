describe('template spec', () => {
  it('fixture', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.fixture("orange").then((data)=>{

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
      cy.get('.oxd-button').click()
    })

  })
it.only("data-driven",()=>{

    cy.fixture("orange2").then((data)=>{

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 

     data.forEach((idata)=>{
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(idata.username)
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(idata.password)
      cy.get('.oxd-button').click()

    if(idata.username == "Admin" && idata.password == "admin123"){ 
      cy.get('.oxd-userdropdown-tab').click()
      cy.wait(2000)
      cy.get(':nth-child(4) > .oxd-userdropdown-link').click()      
    }else{

     cy.get("[class='oxd-text oxd-text--p oxd-alert-content-text']").should("have.text","Invalid credentials")

    }






     })

       






    })






  })





})