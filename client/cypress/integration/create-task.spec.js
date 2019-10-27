describe('Task creation', () => {
    beforeEach(() => {
        cy.seedAndVisit([])
    })

    it('focuses input on load', () => {
        cy.focused().should('have.class', 'new-todo')
    })

    it('shows empty list on load', () => {
        cy.get('[data-cy=task-item]').should('have.length', 0)
    })

    it('accept text input ', () => {
        const inputText = 'Coding, learning, teaching'
        cy.focused().type(inputText)

        cy.get('[data-cy=task-input]').should('have.value', inputText)
    })

    it('adds task to the list', () => {
        const inputText = 'First task'
        cy.get('[data-cy=task-input]')
            .should('have.value', '')
            .type(`${inputText}{enter}`)
            .and('have.value', '')

        cy.get('[data-cy=task-item]')
            .should('have.length', 1)
            .and('contain.text', inputText)
    })

    context('Submit task', () => {
        beforeEach(() => {
            cy.server()
        })

        it('Add new task on submit', () => {
            const testItem = 'Learn cy'

            cy.route('POST', '/api/tasks', {
                name: testItem,
                id: 1,
                isComplete: false
            })

            cy.get('[data-cy=task-input]')
                .type(testItem)
                .type('{enter}')
                .should('have.value', '')

            cy.get('[data-cy=task-item]').should('have.length', 1)
        })
    })
})
