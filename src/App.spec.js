import React from "react";
import { expect } from "chai";
import { decideWinner, DATA_ROCK, DATA_PAPER, DATA_SCISSORS } from "./App";

describe("App component testing", () => {
  it("results draw", () => {
    let message = "It's a draw";
    expect(decideWinner(DATA_ROCK, DATA_ROCK)).to.equal(message);
    expect(decideWinner(DATA_PAPER, DATA_PAPER)).to.equal(message);
    expect(decideWinner(DATA_SCISSORS, DATA_SCISSORS)).to.equal(message);
  });

  it("results your win", () => {
    let message = "You are the winner";
    expect(decideWinner(DATA_PAPER, DATA_ROCK)).to.equal(message);
    expect(decideWinner(DATA_SCISSORS, DATA_PAPER)).to.equal(message);
    expect(decideWinner(DATA_ROCK, DATA_SCISSORS)).to.equal(message);
  });
  it("results computer win", () => {
    let message = "You lost";
    expect(decideWinner(DATA_ROCK, DATA_PAPER)).to.equal(message);
    expect(decideWinner(DATA_PAPER, DATA_SCISSORS)).to.equal(message);
    expect(decideWinner(DATA_SCISSORS, DATA_ROCK)).to.equal(message);
  });
});
