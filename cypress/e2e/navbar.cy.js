/// <reference types="cypress" />

describe("Navbar rendered successfully", () => {
  it("should be render in all pages except Posts(Home) page", () => {
    // Check it does not exist in posts page
    cy.visit("/");
    cy.get("[data-cy='navbar']").should("not.exist");

    // Check it exists in blog posts page
    cy.visit("/post/1");
    cy.get("[data-cy='navbar']").should("exist");

    // Check it exists in blog posts page
    cy.visit("/user/1");
    cy.get("[data-cy='navbar']").should("exist");
  });

  it("should logo navigates to home page", () => {
    cy.visit("/post/1");

    // Click on the logo
    cy.get("[data-cy='logo']").click();
    cy.location("pathname", "/");
  });

  it("should navigate to error page if route is wrong", () => {
    cy.visit("/abs");

    cy.location("pathname", "404")
  });
});
