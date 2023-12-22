//US1

describe('contains logo', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.contains('GREENKART')
  })
})

// describe('succesfully add one product to cart', () => {
//   it('passes', () => {
//     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
//     cy.get('input[<h4>=Strawberry]')
//     cy.contains('+')
//   })
// })

