describe("AuctionCard", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/')    
    })

    it('should take you to the correct auction page when clicking a card', () => {
        cy.get(':nth-child(1) > a > .auction > .info-container > .personalInfo > .boldText') // Get name div from first auction card
            .invoke('text') // get text value from div
            .then((cardName) => { // save text value as cardName
                cy.get(':nth-child(1) > a > .auction').click() // Click first card
                cy.get('#auction-top-right-div > h2') // Get name div on auction page
                    .invoke('text') // Get text value from div
                    .should((auctionName) => { //
                        expect(cardName).to.eq(auctionName) // assert that names match
                    })
            })
    })

    it("can sort on competence", () => {
        cy.get('.action-container > :nth-child(1)').click()
        cy.get('.action-container > :nth-child(2)').click()
        cy.get('.action-container > :nth-child(3)').click()
        cy.get('.action-container > :nth-child(4)').click()
        cy.get('.action-container > :nth-child(5)').click()
    })
})


  /*it("redirects to auction page when clicking on the card", () => {
        createTestUser()
        loginTestUser()
        const id = "62908df4c10d127f47caacb2/62908d7dc10d127f47caacae"
        cy.get(':nth-child(1) > a > .auction')
        cy.url().should('equal', `http://localhost:3000/auction-page${id}`)

    })*/