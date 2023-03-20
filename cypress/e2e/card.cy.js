/// <reference types="cypress" />

describe("Post card functionality", () => {
  beforeEach(() => {
    cy.fixture("posts")
      .as("postsFakeData")
      .then((posts) => {
        // spying and response stubbing
        // Simulate api request to get all posts
        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/posts?_expand=user",
          posts
        );
      });
    cy.visit("/");
  });

  it("should render blog cart UI successfully", () => {
    cy.get("@postsFakeData").then((posts) => {
      const [post] = posts;

      // Check for post title
      cy.get("[data-cy='post-title']").first().should("contain", post.title);

      // Check for post body
      cy.get("[data-cy='post-body']")
        .first()
        .should("contain", post.body.slice(0, 10));

      // Check for user name
      cy.get("[data-cy='user-name']").first().should("contain", post.user.name);

      // Check for user avatar
      cy.get("[data-cy='user-avatar']")
        .first()
        .should("contain", post.user.name[0]);
    });
  });

  it("should navigate to blog page correctly", () => {
    cy.get("@postsFakeData").then((posts) => {
      const [post] = posts;

      // Check navigation to post page after clicking on the link icon
      cy.get("[data-cy='post-link']").first().click();
      cy.location("pathname", `/post/${post.id}`);
    });
  });

  it("should navigate to user posts page correctly", () => {
    cy.get("@postsFakeData").then((posts) => {
      const [post] = posts;

      // Click on author name
      cy.get("[data-cy='user-name']").first().click();
      cy.location("pathname", `/user/${post.userId}`);
    });
  });
});
