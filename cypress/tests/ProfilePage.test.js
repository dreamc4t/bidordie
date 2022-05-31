import axios from "axios"
import {API_URL_USERS} from "../../src/constants/urlConstants"

//Skapar test user, loggar in och klickar på MyPage i header för att kunna rendera rätt information och edit profile-knappen.
function createTestUser() {
    cy.visit("/become-a-member")
    cy.get(':nth-child(1) > :nth-child(1) > div > input').clear().type('ProfileTestFirstName')
    cy.get(':nth-child(1) > :nth-child(2) > div > input').clear().type('ProfileTestLastName')
    cy.get('.basic-info-div > :nth-child(1) > :nth-child(4) > div > input').clear().type('profilelogin@test.com')
    cy.get('[type="password"]').clear().type('123')
    cy.get('.submit-button-div > div > input').click()
    cy.get('.submit-button').click()
}
    
function loginTestUser() {
    cy.visit('/login')
    cy.get('[type="text"]').type('profilelogin@test.com')
    cy.get('[type="password"]').type('123')
    cy.get('form > :nth-child(3)').click()
}

function clickMyPage() {
    cy.visit('/')
    cy.get(':nth-child(5) > div > .header-button-element').click()
}

function deleteTestUser() {
    axios.delete(`${API_URL_USERS}/deleteUserByEmail/profilelogin@test.com`)
}

describe('ProfilePage', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        deleteTestUser()
    })

    /* it('displays user information', () => {
        cy.get('#profile-page').should('exist')
    }) */

    //Testar så att Edit User Page-knappen renderas om användaren är inloggad.
    it('redirects user to EditProfileUserPage when clicking the Edit button', () => {
        createTestUser()
        loginTestUser()
        clickMyPage()
        cy.get('[href="/edit-user-page"]').click()
        cy.url().should('equal', '/edit-user-page')
        deleteTestUser()
    })
})