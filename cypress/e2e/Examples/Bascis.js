/// <reference types='cypress'/>
describe('First testCase',function()
{

    it('First Test',function(){

        cy.visit(Cypress.env('url')+"seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        //cy.get("[placeholder='Search for Vegetables and Fruits']").should('have.length','4');
        cy.wait(2000);
        cy.get('.search-keyword').should('have.length','1');
       // cy.get('.product').should('have.length','4');

       //cy.get('.product:visible').should('have.length','4');

       cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
       
       //To do above step without index

        cy.get('.products').find('.product').each(($el, index, $list) => 
            {
                 const veggname=$el.find('.product-name').text()

                 if(veggname.includes("Capsicum")){
                   // $el.find('button').click() --click function on find is deprecated if need to us ewe need wrap element in wrap method as below
                   cy.wrap ($el).find('button').click()

                 }
            }
    )
      
        
    })
})