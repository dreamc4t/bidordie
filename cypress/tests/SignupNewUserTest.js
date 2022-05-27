import axios from "axios";
import { URL_HOME, API_URL_USERS } from "../../src/constants/urlConstants";

describe("Header", () => {


  beforeEach(() => {
    cy.visit(URL_HOME + "3000/become-a-member");
    axios.delete(
        `${API_URL_USERS}/deleteUserByEmail/test_email@testare.se`
      ),
        {};
  });

  after(() => {
    axios.delete(
        `${API_URL_USERS}/deleteUserByEmail/test_email@testare.se`
      ),
        {};
  });

  it("Test to see if state changes from person to company state on click", () => {
    cy.get("h1").contains("Create account");
    cy.get("#radio1").click();
    cy.get('input[name="firstname"]').should("exist");

    cy.get("#radio2").click();
    cy.get('input[name="firstname"]').should("not.exist");
    cy.get('input[name="companyname"]').should("exist");
    cy.get("#radio1").click();
    cy.get('input[name="firstname"]').should("exist");
  });

  it("Should not be able to submit form if firstname, lastname, password, email are not filled in. ", () => {
    //set view to person/normal user
    cy.get("#radio1").click();
    cy.get('input[name="firstname"]').should("exist");

    cy.get('input[name="firstname"]')
      .type("Testarkingen")
      .get('input[name="lastname"]')
      .type("Testsson");
    cy.get(".submit-button").click();

    cy.get("form").then(
      ($form) => expect($form[0].checkValidity()).to.be.false
    );

    cy.get('input[name="email"]')
      .type("test_email@testare.se")
      .get('input[name="password"]')
      .type("abc123");
    cy.get(".submit-button").click();

    cy.get("form").then(
      ($form) => expect($form[0].checkValidity()).to.be.false
    );

    cy.get(".submit-button-div input").click();
    cy.get(".submit-button").click();
    cy.get("form")
      .then(($form) => expect($form[0].checkValidity()).to.be.true)
  });



  it("Should not create user if email exists in database", () => {
    cy.get('input[name="firstname"]')
      .type("Testarkingen")
      .get('input[name="lastname"]')
      .type("Testsson")
      .get('input[name="email"]')
      .type("test_email@testare.se")
      .get('input[name="password"]')
      .type("abc123")
      .get(".submit-button-div input").click()
      .get(".submit-button").click()

      cy.get('input[name="firstname"]')
      .type("Testarkingen")
      .get('input[name="lastname"]')
      .type("Testsson")
      .get('input[name="email"]')
      .type("test_email@testare.se")
      .get('input[name="password"]')
      .type("abc123")
      .get(".submit-button-div input").click()
      .get(".submit-button").click()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Email already exist, try another');
      });


  })



});
