import axios from "axios";
import { API_URL_USERS } from "../../src/constants/urlConstants";

function createTestUser() {
    cy.visit("/become-a-member")
    cy.get(':nth-child(1) > :nth-child(1) > div > input').clear().type('LoginTestFirstName')
    cy.get(':nth-child(1) > :nth-child(2) > div > input').clear().type('LoginTestLastName')
    cy.get('.basic-info-div > :nth-child(1) > :nth-child(4) > div > input').clear().type('login@test.com')
    cy.get('[type="password"]').clear().type('test123')
    cy.get('.submit-button-div > div > input').click()
    cy.get('.submit-button').click()
    cy.visit('/login')
}

function deleteTestUser() {
    cy.request('DELETE', `${API_URL_USERS}/deleteUserByEmail/login@test.com`)
}

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
        createTestUser()
        cy.get('[type="text"]').type('login@test.com')
        cy.get('[type="password"]').type('test123')
        cy.get('form > :nth-child(3)').click()
        cy.url().should('equal', 'http://localhost:3000/')
        deleteTestUser()
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