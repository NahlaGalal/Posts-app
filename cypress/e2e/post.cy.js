/// <reference types="cypress" />

describe("Render post details page successfully", () => {
  before(() => {
    cy.fixture("postDetails")
      .as("postFakeData")
      .then((post) => {
        // spying and response stubbing
        // Simulate api request to get post details
        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/posts/1?_embed=comments&_expand=user",
          { body: post }
        );
      });
    cy.visit("/post/1");
  });

  it("should render the UI successfully", () => {
    cy.get("@postFakeData").then((post) => {
      const {
        title,
        body,
        user: {
          name,
          phone,
          company: { name: companyName },
        },
      } = post;

      // Check for title
      cy.get("[data-cy='post-title']").contains(title);

      // Check for body
      cy.get("[data-cy='post-body']").contains(body);

      // Check for user data
      cy.get("[data-cy='user-name']").contains(
        new RegExp(`${name}.*${companyName}`)
      );
      cy.get("[data-cy='user-avatar']").contains(name[0]);
      cy.get("[data-cy='user-phone']").contains(phone);
    });
  });
});
