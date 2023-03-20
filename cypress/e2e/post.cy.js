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
  });

  beforeEach(() => {
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
        comments,
      } = post;

      // Check for title
      cy.get("[data-cy='post-title']")
        .contains(title)
        .should("have.prop", "tagName")
        .should("eq", "H1");

      // Check for body
      cy.get("[data-cy='post-body']").should("contain", body);

      // Check for user data
      cy.get("[data-cy='user-name']").should("contain", name);
      cy.get("[data-cy='user-company']").should("contain", companyName);
      cy.get("[data-cy='user-avatar']").should("contain", name[0]);
      cy.get("[data-cy='user-phone']").should("contain", phone);

      // Check for comments
      // Comments header
      cy.get("[data-cy='comments-header']").should(
        "contain",
        `Top Comments (${comments.length})`
      );

      // Comments list
      cy.get("[data-cy='comment']").should("have.length", 3);
      cy.get("[data-cy='commenter-avatar']")
        .first()
        .should("contain", comments[0].name[0].toLocaleUpperCase());
      cy.get("[data-cy='commenter-name']")
        .first()
        .should("contain", comments[0].name);
      cy.get("[data-cy='commenter-email']")
        .first()
        .should("contain", comments[0].email);
      cy.get("[data-cy='comment-body']")
        .first()
        .should("contain", comments[0].body);
    });
  });

  it("should toggle textarea height", () => {
    // Default state
    cy.get("[data-cy='comment-textarea']").should("have.css", "height", "64px");
    cy.get("[data-cy=submit-comment]").should("not.exist");
    cy.get("[data-cy=cancel-comment]").should("not.exist");

    // Focus on textarea => It will be expanded and buttons will be shown
    cy.get("[data-cy='comment-textarea']").focus();
    cy.get("[data-cy='comment-textarea']").should(
      "have.css",
      "height",
      "128px"
    );
    cy.get("[data-cy=submit-comment]").contains("Submit").should("exist");
    cy.get("[data-cy=cancel-comment]").contains("Cancel").should("exist");

    // Click on cancel button => Textarea will be collapsed and buttons will be hidden
    cy.get("[data-cy='cancel-comment']").click();
    cy.get("[data-cy='comment-textarea']").should("have.css", "height", "64px");
    cy.get("[data-cy=submit-comment]").should("not.exist");
    cy.get("[data-cy=cancel-comment]").should("not.exist");
  });
});
