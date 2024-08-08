/// <reference types='cypress'/>
import HomePage from '../Practice/HomePage';


describe('Test data ',function()
{
    
    

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

it('data',function()
{
    const homePage =new HomePage()
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
   // cy.get(".form-group  input[minlength='2']").type(this.testdata.namName)
   homePage.getEditbox().type(this.data.name)
   cy.get('a[href="/angularpractice/shop"]').click()
   // over riding default  time out in spec file
   //cypress.config('defaultcommandtimeout',8000)
   cy.url().should('contain','shop')
   
   
   this.data.productName.forEach(function(element) {
    cy.selectProduct(element)
   });
   
     



   



})
})