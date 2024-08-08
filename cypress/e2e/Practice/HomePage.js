class HomePage
{
  getEditbox()
  {
     return cy.get(':nth-child(1) > .form-control')
  }
}
export default HomePage;

//export default HomePage;