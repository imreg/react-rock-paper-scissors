import React from "react";
import { expect } from "chai";
import { scoresGame, decideWinner } from "./App";
import {
  DATA_ROCK,
  DATA_PAPER,
  DATA_SCISSORS,
  DATA_DRAW,
  DATA_USER,
  DATA_COMPUTER
} from "./Constants";

describe("App component testing", () => {
  it("results draw", () => {
    let message = { message: "It's a draw", winner: 0 };
    expect(decideWinner(DATA_ROCK, DATA_ROCK)).to.eql(message);
    expect(decideWinner(DATA_PAPER, DATA_PAPER)).to.eql(message);
    expect(decideWinner(DATA_SCISSORS, DATA_SCISSORS)).to.eql(message);
  });
  it("results your win", () => {
    let message = { message: "You are the winner", winner: 1 };
    expect(decideWinner(DATA_PAPER, DATA_ROCK)).to.eql(message);
    expect(decideWinner(DATA_SCISSORS, DATA_PAPER)).to.eql(message);
    expect(decideWinner(DATA_ROCK, DATA_SCISSORS)).to.eql(message);
  });
  it("results computer win", () => {
    let message = { message: "You lost", winner: 2 };
    expect(decideWinner(DATA_ROCK, DATA_PAPER)).to.eql(message);
    expect(decideWinner(DATA_PAPER, DATA_SCISSORS)).to.eql(message);
    expect(decideWinner(DATA_SCISSORS, DATA_ROCK)).to.eql(message);
  });
  it("returns score 1-0 when user win", () => {
    let scores = { user: 0, computer: 0 };
    let expectation = { user: 1, computer: 0 };
    expect(scoresGame(DATA_USER, scores)).to.eql(expectation);
  });
  it("returns score 0-0 when draw", () => {
    let scores = { user: 0, computer: 0 };
    let expectation = { user: 0, computer: 0 };
    expect(scoresGame(DATA_DRAW, scores)).to.eql(expectation);
  });
  it("returns score 0-1 when user win", () => {
    let scores = { user: 0, computer: 0 };
    let expectation = { user: 0, computer: 1 };
    expect(scoresGame(DATA_COMPUTER, scores)).to.eql(expectation);
  });
});
