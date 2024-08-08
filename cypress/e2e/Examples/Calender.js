/// <reference types='cypress'/>

describe ('Calender',function()
{
    it('calender',function()
{
    const Year='2026'
    const Month='5'
    const Date='10'
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    cy.get("div[class*='inputGroup']").click()
    cy.get(".react-calendar__navigation__label").click().click()
    cy.get("[class*='view__years__year']").each(($el,Index)=>
    {
        const appyear =$el.text()
        if(appyear.includes(Year)){

            //cy.wrap($el).find("[class*='view__years__year']").click()
            cy.wrap ($el).click()
        }
    })
    //cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click(); --> Selecting Month
    

    cy.get('abbr').each(($el,Index,$list)=>
    {
        const appmon=$el.text()
        if(appmon==='May'){
            cy.wrap($el).click()
        }
    })
// Selecting Date
    cy.contains("abbr",Date).click();

    const ExpectedList=[Month,Date,Year]
    //Assertion
    cy.get("input[class*='react-date-picker']").each(($el,Index)=>{
   cy.wrap($el).invoke('val').should('eq',ExpectedList[Index])
    })
    
})
})