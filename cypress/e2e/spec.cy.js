//US1

describe('contains logo', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.contains('GREENKART')
  })
})

describe('empty cart checkout', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.cart').get('.cart-icon').click()
//    cy.get('.cart').get('.cart-preview').get('.action-block').get('button').click()
  })
})

// describe('succesfully add one product to cart', () => {
//   it('passes', () => {
//     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
//     cy.get('input[<h4>=Strawberry]')
//     cy.contains('+')
//   })
// })

