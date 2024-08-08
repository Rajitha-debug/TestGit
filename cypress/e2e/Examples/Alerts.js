///<reference types='cypress'/>
describe('Alerts Handeling',function()
{
    it('alert handeling',function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#name').type('Rajitha')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // To Catcher Text from the pop up and validate we need to do following
        cy.on('window:alert',(str=>{

           // cy.log(str.text())

            expect(str).to.equal('Hello Rajitha, share this practice page and share your knowledge')

            
            


        }))

        cy.on('window:confirm',(str=>
            {
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            }))



    })
})