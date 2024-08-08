/// <reference types='cypress'/>
describe('Mouse hover',function()
{
    it('Mouse hover',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cy.get('.mouse-hover-content').invoke('show')
    //cy.contains('Top').click()
    //cy.url().should('contains','top')

    // above this can be achived by cypress as well
    cy.contains('Reload').click({force:true})


})
})