import "cypress-file-upload"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://the-internet.herokuapp.com/upload')

    //uploading file
    // cy.get("#file-upload").attachFile("IPT suresh sir.txt")

    //changing name
    // cy.get("#file-upload").attachFile({filePath:"IPT suresh sir.txt",fileName:"NEW.txt"})
 

    //drag and drop file 

    // cy.get("#drag-drop-upload").attachFile("IPT suresh sir.txt",{subjectType:"drag-n-drop"})
 
    //multiple file upload
    cy.get("#drag-drop-upload").attachFile(["IPT suresh sir.txt","Book1.xlsx"])

    cy.get('#file-submit').click()


  })
})