describe('todo-list app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays My tasks', () => {
        cy.contains('My tasks')
    })

    it('task list is not visible', () => {
        cy.get('.task-list-container')
            .should('not.be.visible')
    })

    it('add new todo items', () => {
        const newItem = 'Feed the cat'
        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

        cy.get('.task-list-container')
            .should('be.visible')
            .should('have.length', 1)
            .last()
            .should('have.text', newItem)
    })

    it('mark task as a completed', () => {
        const newItem = 'Feed the cat'
        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

        cy.get('.container-task')
            .first('button').as('firstBtn').click()

        cy.get('.task-list-container')
            .first()
            .children()
            .should('have.class', 'container-task completed')

    })

    // it('delete first item', () => {
    //     const newItem = 'Feed the cat'
    //     cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

    //     cy.get('.icon-task-container')
    //         .click()
        
    //     cy.get('.task-list-container')
    //         .should('not.be.visible')
    // })
})