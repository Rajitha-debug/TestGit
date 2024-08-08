/// <reference types='cypress'/>
describe('Handling Tables', function () {
    it('Tables', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, Index, $list) => {
            const course = $el.text()

            if (course === 'Learn JMETER from Scratch - (Performance + Load) Testing Tool') {

                cy.get('tr td:nth-child(2)').eq(Index).next().then(function (price) {
                    const cost = price.text()

                    //expect(cost).to .equal('25')
                    cy.get('tr td:nth-child(2)').eq(Index).next().should('contain', cost)

                })
            }
        })
    })
})