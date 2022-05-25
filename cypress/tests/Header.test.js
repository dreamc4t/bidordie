function login() {
    cy.visit('/login')
    cy.get('[type="text"]').type('test@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('form > :nth-child(3)').click()
}1

describe("Header", () => {

    beforeEach(() => {
        cy.visit("/")
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
        login()
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
        login()
        cy.get('[href="/new-auction"] > div > .header-button-element').click()
        cy.url().should('equal', 'http://localhost:3000/new-auction')
    })

    it('redirects to my page when clicking My page', () => {
        login()
        cy.get('[href="/profile-page-user/628e2346f282dd5d3a20db29"] > div > .header-button-element').click()
        cy.url().should('equal', 'http://localhost:3000/profile-page-user/628e2346f282dd5d3a20db29')
    })

    it('logs out and redirects to auction-list page when clicking Log Out', () => {
        login()
        cy.get(':nth-child(4) > div > .header-button-element').contains('Log Out')
        cy.get(':nth-child(4) > div > .header-button-element').click()
        cy.get('.header-nav').contains('Login')
        cy.url().should('equal', 'http://localhost:3000/')
    })

}) 