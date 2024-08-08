/// <reference types='cypress'/>
/// <reference types='cypress-iframe'/>
import 'cypress-iframe'

describe("Frames",function()
{
    it('frames',() =>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Mentorship').click()
    })
})