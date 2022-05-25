describe('LoginPage', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('should contain a valid form', () => {
        cy.get('#login-container').should('exist')
        cy.get('[type="text"]').should('exist')
        cy.get('[type="password"]').should('exist')
        cy.get('form > :nth-child(3)').should('exist')
        cy.get('form > a > .button-element').should('exist')

        
    })

    it('should log in and go to auction list page when clicking the login button', () => {
        cy.get('[type="text"]').type('test@test.com')
        cy.get('[type="password"]').type('test123')
        cy.get('form > :nth-child(3)').click()
        cy.url().should('equal', 'http://localhost:3000/')
    })

    it('should print an error message when submitting bad login credentials', () => {
        cy.get('[type="text"]').type('wrong@test.com')
        cy.get('[type="password"]').type('wrong123')
        cy.get('form > :nth-child(3)').click()
        cy.get('#login-container').should('contain', 'Failed to login, try again')
    })

    it('should go to signup page when clicking create account button', () => {
        cy.get('form > a > .button-element').click()
        cy.url().should('equal', 'http://localhost:3000/become-a-member')
    })

})