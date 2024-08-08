/// <reference types='cypress'/>

describe('File upload',function(){


    it('File Upload',()=>{

        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html')
        cy.get('#downloadButton').click();
        cy.wait(4000);
        const FilePath= Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx"

        cy.task('writeExcelTest',{searchText:'Mango',replaceText:500,change:{rowChange:0,colChange:2},filePath:FilePath });
        cy.get("#fileinput").selectFile(FilePath);

        


    })
})