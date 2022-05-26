describe("Footer", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("redirects to google store when clicking the Google button", () => {
        cy.get('[href="https://play.google.com/store"]').click()
        cy.url().should('https://play.google.com/store')
    })

    it("redirects to apple store when clicking the Apple button", () => {
        cy.get('[href="https://www.apple.com/app-store/"]').click()
        cy.url().should('https://www.apple.com/app-store/')
    })

    it("redirects to Facebook when clicking the Facebook button", () => {
        cy.get('[href="https://www.facebook.com"]').click()
        cy.url().should('https://www.facebook.com')
    })

    it("redirects to Instagram when clicking the Instagram button", () => {
        cy.get('[href="https://www.instagram.com"]').click()
        cy.url().should('https://www.instagram.com')
    })

    it("redirects to Twitter when clicking the Twitter button", () => {
        cy.get('[href="https://www.twitter.com"]').click()
        cy.url().should('https://www.twitter.com')
    })

    it("redirects to faq page when clicking the ? button", () => {
        cy.get('[href="/FAQ"]').click()
        cy.url().should('equal', 'http://localhost:3000/FAQ')
    })

    it("redirects to About Us page when clicking the About Us button", () => {
        //cy.get("button").contains("About Us")
        cy.get('[href="/about-us"').click({ multiple: true })
        cy.url().should('equal', 'http://localhost:3000/about-us')
    })
})