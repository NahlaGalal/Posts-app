/// <reference types="cypress" />

describe("User posts page renders successfully", () => {
  beforeEach(() => {
    cy.fixture("user")
      .as("userFakeData")
      .then((user) => {
        // spying and response stubbing
        // Simulate api request to get post details
        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/users/1?_embed=posts",
          { body: user }
        );
      });
    cy.visit("/user/1");
  })

  it("should be render user details correctly", () => {
    cy.get("@userFakeData").then((user) => {
      const { website, company, email, name, phone, username } = user;

      // Check for user avatar
      cy.get("[data-cy='user-avatar']").should(
        "contain",
        name[0].toLocaleUpperCase()
      );

      // Check for user name
      cy.get("[data-cy='user-name']")
        .should("contain", name)
        .should("have.prop", "tagName")
        .should("eq", "H2");

      // Check for user username
      cy.get("[data-cy='user-username']").should("contain", `@${username}`);

      // Check for user phone
      cy.get("[data-cy='user-phone']").should("contain", phone);

      // Check for user email
      cy.get("[data-cy='user-email']").should("contain", email);

      // Check for user website
      cy.get("[data-cy='user-website']")
        .should("contain", website)
        .should("have.prop", "tagName")
        .should("eq", "A");

      cy.get("[data-cy='user-website']")
        .should("have.prop", "href")
        .should("contain", website);

      // Check for work
      cy.get("[data-cy='work-title']").should("contain", "Work");
      cy.get("[data-cy='user-company']").should(
        "contain",
        `${company.bs} @ ${company.name}`
      );
    });
  });

  it('should be render user posts correctly', () => {
    cy.get("@userFakeData").then((user) => {
      // Number of post cards == number of posts in user data
      cy.get("[data-cy='post-card']").should("have.length", user.posts.length);

      // All posts created by the same user
      cy.get("[data-cy='user-name']").should("contain", user.name);
    })
  });
});
