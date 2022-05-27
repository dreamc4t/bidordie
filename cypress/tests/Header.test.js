import axios from "axios";
import { API_URL_USERS } from "../../src/constants/urlConstants";

function createTestUser() {
    cy.visit("/become-a-member")
    cy.get(':nth-child(1) > :nth-child(1) > div > input').clear().type('HeaderTestFirstName')
    cy.get(':nth-child(1) > :nth-child(2) > div > input').clear().type('HeaderTestLastName')
    cy.get('.basic-info-div > :nth-child(1) > :nth-child(4) > div > input').clear().type('header@test.com')
    cy.get('[type="password"]').clear().type('test123')
    cy.get('.submit-button-div > div > input').click()
    cy.get('.submit-button').click()
}

function deleteTestUser() {
    axios.delete(`${API_URL_USERS}/deleteUserByEmail/header@test.com`)
}

function loginTestUser() {
    cy.visit('/login')
    cy.get('[type="text"]').type('header@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('form > :nth-child(3)').click()
}

describe("Header", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    afterEach(() => {
        deleteTestUser()
    })

    it("displays the logo", () => {
        cy.get("h1").contains("BIDORDIE")
    })

    it("shows the correct navbar before and after logging in", () => {
        cy.get('.header-nav')
            .should('include.text', 'Auctions')
            .should('include.text', 'About')
            .should('include.text', 'Signup')
            .should('include.text', 'Login')
        createTestUser()
        loginTestUser()
        cy.get('.header-nav')
            .should('include.text', 'Auctions')
            .should('include.text', 'New auction')
            .should('include.text', 'About')
            .should('include.text', 'Log Out')
            .should('include.text', 'My page')
    })

    it("redirects to auction-list page when clicking Auctions", () => {
        cy.get('[href="/"] > div > .header-button-element').click()
        cy.url().should('equal', 'http://localhost:3000/')
    })
    
    it("redirects to about page when clicking About", () => {
        cy.get('[href="/about-us"] > div > .header-button-element').click()
        cy.url().should('equal', 'http://localhost:3000/about-us')
    })

    it('redirects to signup page when clicking signup', () => {
        cy.get('[href="/become-a-member"] > div > .header-button-element').click()
        cy.url().should('equal', 'http://localhost:3000/become-a-member')
    })

    it('redirects to login page when clicking login', () => {
        cy.get('[href="/login"] > div > .header-button-element').click()
        cy.url().should('equal', 'http://localhost:3000/login')
    })

    it('redirects to new auction page when clicking New Auction', () => {
        createTestUser()
        loginTestUser()
        cy.get('[href="/new-auction"] > div > .header-button-element').click()
        cy.url().should('equal', 'http://localhost:3000/new-auction')
    })

    it('redirects to my page when clicking My page', () => {
        createTestUser()
        loginTestUser()
        cy.get(':nth-child(5) > div > .header-button-element').click()
        cy.get('.profile-page').contains('HeaderTestFirstName')
    })

    it('logs out and redirects to auction-list page when clicking Log Out', () => {
        createTestUser()
        loginTestUser()
        cy.get(':nth-child(4) > div > .header-button-element').contains('Log Out')
        cy.get(':nth-child(4) > div > .header-button-element').click()
        cy.get('.header-nav').contains('Login')
        cy.url().should('equal', 'http://localhost:3000/')
    })

}) 