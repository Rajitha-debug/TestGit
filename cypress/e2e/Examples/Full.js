/// <reference types='cypress'/>

 describe('End to End',function()
 {
    it('End to End ',function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
 // To get text from the Title
    cy.get('.brand').then(function(logoname)
    {
      cy.log(logoname.text())
      
    })
    //Assertion for title validation
    cy.get('.brand').should('have.text','GREENKART')

    //Enter in the search

    cy.get('.search-keyword').type('be')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length','5')
    cy.get('.product').eq(1).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each(($el,Index,$list) =>
        {
            const veggies=$el.find('.product-name').text()
            if(veggies.includes('Raspberry'))
                {
                 cy.wrap($el).contains('ADD TO CART').click()
            }

    }
)

     cy.get('.cart-icon').click()
     cy.contains('PROCEED TO CHECKOUT').click()
     cy.get('.promoCode').type('Rajitha')
     cy.contains('Apply').click()
     cy.wait(2000)
     cy.get('.promoInfo').should('have.text','Invalid code ..!')

     cy.get('.promoInfo').then(function(promocode)
     {
        cy.log(promocode.text())
     })
     cy.contains('Place Order').click()



    
    

})
 })