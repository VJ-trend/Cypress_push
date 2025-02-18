describe('template spec', () => {
  it('navigation', () => {
    cy.visit('https://www.amazon.in/')

    cy.get('[href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"]')
    .should("have.text","mxplayer")


  })
})