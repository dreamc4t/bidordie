describe('Faq', function () {

    beforeEach(() => {
        cy.visit("/FAQ")
    })

    it("Displays Faq logo", () => {
        cy.get("h2").contains("FAQ")
    })

    it("Toggles faq questions when clicked", () => {
        cy.get(':nth-child(2) > .faq-question').click({ multiple: true})
    })

    it("Finds contact us button, clicks it and input fields", () => {
        cy.get('[type="button"]').click()
        cy.get('[name="nameOfSender"]').type('TestName')
        cy.get('[name="phone"]').type('123456789')
        cy.get('[name="emailOfSender"]').type('Tester@Testing.com')
        cy.get('[name="message"]').type('Test Message')
        cy.get('.close-icon').click()
    })
})