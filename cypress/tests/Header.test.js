describe("Header", () => {

    it("Testing header components displaying correctly", () => {
        cy.visit("/")
        cy.get("h1").contains("BIDORDIE")
    })

})