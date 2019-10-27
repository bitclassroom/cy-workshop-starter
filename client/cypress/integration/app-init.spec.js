/// <reference types="Cypress" />

describe('App initialization', () => {
    beforeEach(() => {
        cy.seedAndVisit()
    })

    it('App load', () => {
        cy.get('h1').should('contain.text', 'Task')
        cy.get('h3').should('contain.text', 'All you need to do')
    })

    it('shows list with tasks on load', () => {
        cy.get('[data-cy=task-item]').should('have.length', 3)

        cy.get('[data-cy=tasks-count]').should('have.text', '3')
    })

    it('shows wait for tasks', () => {
        cy.server()
        cy.route('GET', '/tasks').as('tasks')
        cy.visit('/')

        cy.wait('@tasks')

        cy.get('[data-cy=tasks-count]').should('have.text', '4')
    })

    it('shows show error on load', () => {
        cy.server()
        cy.route({
            url: '/tasks',
            method: 'GET',
            status: 500,
            response: {}
        })
        cy.visit('/')
        cy.get('[data-cy=task-item]').should('not.exist')
    })
})
