/// <reference types="cypress" />
describe('Visita o sistema', () => {
  it('Apenas realiza a visita ao sistema', () => {
    cy.visit('/')
  })
})