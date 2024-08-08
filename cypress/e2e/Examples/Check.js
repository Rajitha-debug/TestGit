/// <refernce types='cypress'/>
describe('check box',function()
{
    it('Check box',function()
{
 cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
 cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
 cy.get('#checkbox-example').find('input[type="checkbox"]').check()
 cy.get('#checkbox-example').find('input[type="checkbox"]').uncheck()

 cy.get('#checkbox-example').find('input[type="checkbox"]').check(['option1','option3'])
 cy.get('#checkbox-example').find('input[type="checkbox"]').uncheck(['option1'])
 //cy.get('#checkbox-example').find('input[type="checkbox"]')

})
})