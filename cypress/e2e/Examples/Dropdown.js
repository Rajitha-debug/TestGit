/// <reference types='cypress'/>

describe('Drop down handeling ',function()
{
    it('static drop down',function()
{

    // static drop down
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // selecting by text
    cy.get('select').select('Option1').should('have.value','option1')
   // selecting by value 
    cy.get('select').select('option2').should('have.value','option2')

 //Dynamic drop down
  cy.get('#autocomplete').type('can')
  cy.get('.ui-menu-item').find('.ui-menu-item-wrapper').each(($el,Index,$list)=>
    {
         if($el.text()==='Canada')
            {
               cy.wrap ($el).click()
            }
    })

})
})
