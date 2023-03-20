/// <reference types="cypress" />

describe("Post card functionality", () => {
  beforeEach(() => {
    cy.fixture("users")
      .as("usersFakeData")
      .then((users) => {
        // spying and response stubbing
        // Simulate api request to get all users
        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/users",
          users
        );
      });
    cy.fixture("posts")
      .as("postsFakeData")
      .then((posts) => {
        // spying and response stubbing
        // Simulate api request to get all posts
        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/posts",
          posts
        );
      });
    cy.visit("/");
  });

  it("should render blog cart UI successfully", () => {
    cy.get("@postsFakeData").then((posts) => {
      const [post] = posts;

      // Check for post title
      cy.get("[data-cy='post-title']").first().contains(post.title);

      // Check for post body
      cy.get("[data-cy='post-body']").first().contains(post.body.slice(0, 10));

      cy.get("@usersFakeData").then((users) => {
        const user = users.find((user) => user.id === post.userId);

        // Check for user name
        cy.get("[data-cy='user-name']").first().contains(user.name);

        // Check for user avatar
        cy.get("[data-cy='user-avatar']").first().contains(user.name[0]);
      });
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

      cy.get("@usersFakeData").then((users) => {
        const user = users.find((user) => user.id === post.userId);

        // Click on author name
        cy.get("[data-cy='user-name']").first().click();
        cy.location("pathname", `/user/${user.id}`);
      });
    });
  });
});
