/// <reference types="cypress" />
describe("Post card functionality", () => {
  beforeEach(() => {
    cy.fixture("users").as("usersFakeData");
    cy.fixture("posts").as("postsFakeData");
    cy.visit("/");
  });

  it("should render blog cart UI successfully", () => {
    cy.get("@postsFakeData").then((posts) => {
      const [post] = posts;

      // spying and response stubbing
      // Simulate api request to get all posts
      cy.intercept(
        "GET",
        "https://jsonplaceholder.typicode.com/posts",
        posts
      ).as("getPosts");

      // Check for post title
      cy.get("[data-cy='post-title']").first().contains(post.title);

      // Check for post body
      cy.get("[data-cy='post-body']").first().contains(post.body.slice(0, 10));

      cy.get("@usersFakeData").then((users) => {
        const user = users.find((user) => user.id === post.userId);

        // spying and response stubbing
        // Simulate api request to get all users
        cy.intercept(
          "GET",
          "https://jsonplaceholder.typicode.com/users",
          users
        ).as("getUsers");

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

      // spying and response stubbing
      // Simulate api request to get all posts
      cy.intercept(
        "GET",
        "https://jsonplaceholder.typicode.com/posts",
        posts
      ).as("getPosts");

      // Check navigation to post page after clicking on the link icon
      cy.get("[data-cy='post-link']").first().click();
      cy.location("pathname", `/post/${post.id}`);
    });
  });
});
