/// <reference types='cypress'/>
describe('Child window Handles',function()
{
   
    it('Child window Handles',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('#opentab').click()
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',function()
        {
            cy.get("div[class*='mt-50'] h2").then(function(message){
                const str=message.text()
                expect(str).to.equal('Welcome to QAClick Academy ')
        })
        

        })
    })
})