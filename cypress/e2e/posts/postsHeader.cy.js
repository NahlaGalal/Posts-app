/// <reference types="cypress" />

describe("Render posts page header successfully", () => {
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
          "https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=20&_page=1&q=sunt",
          posts.slice(20, 24)
        );
      });

    cy.visit("/");
    cy.clock();
  });

  it("should render header UI", () => {
    // Check for data text
    cy.get("[data-cy='blog-tag']").should("contain", "Our blog");
    cy.get("[data-cy='main-header']").should(
      "contain",
      "Resources and Insights"
    );
    cy.get("[data-cy='sub-header']").should(
      "contain",
      "The latest industry news, interviews, technologies, and resources."
    );
  });

  it("should search posts correctly", () => {
    // Check for search input
    cy.get("[data-cy='search-input']").focus();

    // Search for sunt and wait 300 ms
    cy.get("[data-cy='search-input']").type("sunt", { delay: 0 });
    cy.tick(300);
    
    // Number of cards should be only 5
    cy.get("[data-cy='post-card']").should("have.length", 4);
    
    // Remove text => All cards should be returned
    cy.get("[data-cy='search-input']").clear();
    cy.tick(300);
    
    cy.get("[data-cy='post-card']").should("have.length", 20);
  });
});
