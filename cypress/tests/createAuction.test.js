
import axios from "axios";
import { API_URL_USERS } from "../../src/constants/urlConstants";



function createTestUser() {
    cy.visit("/become-a-member")
    cy.get(':nth-child(1) > :nth-child(1) > div > input').clear().type('testtest')
    cy.get(':nth-child(1) > :nth-child(2) > div > input').clear().type('testtest')
    cy.get('.basic-info-div > :nth-child(1) > :nth-child(4) > div > input').clear().type('testtest')
    cy.get('[type="password"]').clear().type('testtest')
    cy.get('.submit-button-div > div > input').click()
    cy.get('.submit-button').click()
}

function deleteTestUser() {
    cy.request('DELETE', `${API_URL_USERS}/deleteUserByEmail/testtest`)
}

function loginTestUser() {
    cy.visit('/login')
    cy.get('[type="text"]').type('testtest')
    cy.get('[type="password"]').type('testtest')
    cy.get('form > :nth-child(3)').click()
}

describe("addAuction", () => {
    beforeEach(() =>{
        deleteTestUser()
        createTestUser()
        loginTestUser()
        cy.visit("/new-auction")
    })

    afterEach(() => {
        deleteTestUser()
    })

    it("direct you to new auction and shows correct texts", () => {
        cy.get(".form-mid-side > :nth-child(1) > label")
        .contains("Start price")
        cy.get(".form-mid-side > :nth-child(2) > label")
        .contains("Available start date")
        cy.get(".form-right-side > :nth-child(1) > label")
        .contains("End price")
        cy.get(".form-right-side > :nth-child(2) > label")
        .contains("Available end date")
        cy.get(":nth-child(3) > label")
        .contains("Auction end time")
    })

    it("Test if all fields are filled if not all fields required should appear", () => {
        cy.visit("/new-auction")
        cy.get("#add-auction-button").click()
        cy.get("#missingInput").should("exist")

        cy.visit("/new-auction")
        cy.get(".form-mid-side > :nth-child(1) > input")
        .type("500")
        cy.get("#add-auction-button").click()
        cy.get("#missingInput").should("exist")

        cy.visit("/new-auction")
        cy.get(".form-mid-side > :nth-child(1) > input")
        .type("500")
        cy.get(".form-mid-side > :nth-child(2) > input")
        .type("2022-09-20")        
        cy.get("#add-auction-button").click()
        cy.get("#missingInput").should("exist")

        cy.visit("/new-auction")
        cy.get(".form-mid-side > :nth-child(1) > input")
        .type("500")
        cy.get(".form-mid-side > :nth-child(2) > input")
        .type("2022-09-20")    
        cy.get(".form-right-side > :nth-child(1) > input")
        .type("1000")
        cy.get("#add-auction-button").click()
        cy.get("#missingInput").should("exist")

        cy.visit("/new-auction")
        cy.get(".form-mid-side > :nth-child(1) > input")
        .type("500")
        cy.get(".form-mid-side > :nth-child(2) > input")
        .type("2022-09-20")    
        cy.get(".form-right-side > :nth-child(1) > input")
        .type("1000")
        cy.get(".form-right-side > :nth-child(2) > input")
        .type("2022-09-28")
        cy.get("#add-auction-button").click()
        cy.get("#missingInput").should("exist")


    })

    it("Should create new auction succesfully with alert and redirect to /", () =>{
        cy.visit("/new-auction")
        cy.get(".form-mid-side > :nth-child(1) > input")
        .type("500")
        cy.get(".form-mid-side > :nth-child(2) > input")
        .type("2022-09-20")    
        cy.get(".form-right-side > :nth-child(1) > input")
        .type("1000")
        cy.get(".form-right-side > :nth-child(2) > input")
        .type("2022-09-28")
        cy.get(":nth-child(3) > input")
        .type("2022-07-28")
        cy.get("#add-auction-button").click()
        cy.url().should('equal', 'http://localhost:3000/')
    })


})