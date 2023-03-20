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
      cy.get("[data-cy='post-title']").contains(post.title);

      // Check for post body
      cy.get("[data-cy='post-body']").contains(post.body.slice(0, 10));

      cy.get("@usersFakeData").then(users => {
        const user = users.find(user => user.id === post.userId);

        // Check for user name
        cy.get("[data-cy='user-name']").contains(user.name);

        // Check for user avatar
        cy.get("[data-cy='user-avatar']").contains(user.name[0])
      })
    });
  });
});
