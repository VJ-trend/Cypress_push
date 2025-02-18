import 'cypress-iframe';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ui.vision/demo/webtest/frames/')

    cy.frameLoaded("[src='frame_1.html']") //it will load the frame
    cy.iframe("[src='frame_1.html']").find("[name='mytext1']").type("cypress io")

  })
})