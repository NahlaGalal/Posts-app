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
});
