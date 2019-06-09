describe("App Rock Paper Scissors E2E", () => {
  it("should have a panel with initial message: Result", () => {
    cy.visit("/");
    cy.get("h3").should("have.text", "Result");
  });

  it("should have a button called Rock", () => {
    cy.visit("/");
    cy.get("button.App-button-4[data-id=0]").should("have.text", "Rock");
  });

  it("click on button Rock and displayed user's choice", () => {
    cy.visit("/");
    let rock = cy.get("button.App-button-4[data-id=0]");
    rock.click();
    cy.get("h3.MuiTypography-h6").should("be.not.empty");
    cy.get("p.MuiTypography-root").contains("You: Rock");
  });

  it("should have a button called Paper", () => {
    cy.visit("/");
    cy.get("button.App-button-4[data-id=1]").should("have.text", "Paper");
  });

  it("click on button Paper and displayed user's choice", () => {
    cy.visit("/");
    let paper = cy.get("button.App-button-4[data-id=1]");
    paper.click();
    cy.get("h3.MuiTypography-h6").should("be.not.empty");
    cy.get("p.MuiTypography-root").contains("You: Paper");
  });

  it("should have a button called Scissors", () => {
    cy.visit("/");
    let scissors = cy.get("button.App-button-4[data-id=2]");
    scissors.should("have.text", "Scissors");
    scissors.click();
    cy.get("h3.MuiTypography-h6").should("be.not.empty");
    cy.get("p.MuiTypography-root").contains("You: Scissors");
  });

  it("click on button Scissors and displayed user's choice", () => {
    cy.visit("/");
    let scissors = cy.get("button.App-button-4[data-id=2]");
    scissors.click();
    cy.get("p.MuiTypography-root").contains("You: Scissors");
  });
});
