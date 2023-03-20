/// <reference types="cypress" />

describe("Render posts page header successfully", () => {
  it("should render header UI", () => {
    cy.visit("/")

    // Check for data text
    cy.get("[data-cy='blog-tag']").contains("Our blog");
    cy.get("[data-cy='main-header']").contains("Resources and Insights");
    cy.get("[data-cy='sub-header']").contains(
      "The latest industry news, interviews, technologies, and resources."
    );
  });
});
