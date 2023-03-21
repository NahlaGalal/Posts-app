/// <reference types="cypress" />

describe("Post cards renders successfully", () => {
  beforeEach(() => {
    cy.fixture("posts")
      .as("postsFakeData")
      .then((posts) => {
        // spying and response stubbing
        // Simulate api request to get all posts
        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=20&_page=1&q=",
          posts.slice(0, 20)
        );

        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=20&_page=2&q=",
          posts.slice(20, 24)
        );
      });
    cy.visit("/");
  });

  it("should be render user posts correctly", () => {
    cy.get("@postsFakeData").then(() => {
      // Number of post cards is maximum 20
      cy.get("[data-cy='post-card']").should("have.length", 20);

      // Check of load more button and click on it
      cy.get("[data-cy='load-more']")
        .should("exist")
        .should("contain", "Load more");
      cy.get("[data-cy='load-more']").click();

      // Number of post cards is maximum 40 => exactly 24
      cy.get("[data-cy='post-card']").should("have.length", 24);

      // Load more button will be hidden
      cy.get("[data-cy='load-more']").should("not.exist");
    });
  });
});
