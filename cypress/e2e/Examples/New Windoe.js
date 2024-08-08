/// <reference types='cypress'/>

describe('Child Window', function () {
    it('Child Window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then(function (el) {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url,function(){

                const ur =cy.url()
                cy.log(ur)
               
            })
        })

    })
}
)