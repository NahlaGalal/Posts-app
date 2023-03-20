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
    cy.clock();

    // spying and response stubbing
    // Simulate api request to post comment
    cy.intercept(
      "POST",
      "https://jsonplaceholder.typicode.com/posts/1/comments",
      {
        status: 200,
        data: {
          body: "TestBody",
          email: "test@test.com",
          id: 501,
          name: "Test",
          postId: "1",
        },
      }
    ).as("submitComment");
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

  it("should add a comment successfully", () => {
    cy.get("[data-cy='input-name']").focus();

    // Add inputs data
    cy.get("[data-cy='input-name']").type("Test");
    cy.get("[data-cy='input-email']").type("test@test.com");
    cy.get("[data-cy='comment-textarea']").type("TestBody");

    // Click submit
    cy.get("[data-cy='submit-comment']").click();
    cy.wait("@submitComment").then((data) => {
      expect(data.request.body.name).to.eq("Test");
      expect(data.request.body.email).to.eq("test@test.com");
      expect(data.request.body.body).to.eq("TestBody");
    });

    // Comment success
    cy.get("[data-cy='comment-success']").should(
      "contain",
      "Comment added successfully"
    );
    // Wait 1 seond
    cy.tick(1000);
    // Comment success hidden
    cy.get("[data-cy='comment-success']").should("not.exist");
  });

  it("should validate add comment", () => {
    cy.get("[data-cy='comment-textarea']").focus();
    cy.get("[data-cy='submit-comment']").click();

    // Show required error messages
    cy.get("[data-cy='name-error']").contains("Name input is required");
    cy.get("[data-cy='email-error']").contains("Email input is required");
    cy.get("[data-cy='comment-error']").contains("Message input is required");

    // Show valid messages for email
    cy.get("[data-cy='input-email']").type("test");
    cy.get("[data-cy='email-error']").contains("This email is unvalid");

    // Error message shoulf be hidden
    cy.get("[data-cy='input-name']").type("Test");
    cy.get("[data-cy='input-email']").type("test@test.com");
    cy.get("[data-cy='comment-textarea']").type("TestBody");

    cy.get("[data-cy='name-error']").should("not.exist");
    cy.get("[data-cy='email-error']").should("not.exist");
    cy.get("[data-cy='comment-error']").should("not.exist");
  });
});
