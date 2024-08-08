
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../Practice/HomePage';

const homePage =new HomePage()


Given('Rahul Shetty Page shoul be open',function()
{
    
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})


When('enter name on the name field and click on the shop link',function()
{
    homePage.getEditbox().type(this.data.name)
    cy.get('a[href="/angularpractice/shop"]').click()
})

Then('verify the URl after landing the page ',function()
{
   cy.url().should('contain','shop')
})