import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./App.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(6)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing(1)
  }
});

export const DATA_ROCK = 0;
export const DATA_PAPER = 1;
export const DATA_SCISSORS = 2;

const sets = [
  { name: "Rock", colour: "primary", id: DATA_ROCK },
  { name: "Paper", colour: "secondary", id: DATA_PAPER },
  { name: "Scissors", colour: "default", id: DATA_SCISSORS }
];

export const Player = ({ cssStyles, config, event }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Button
        variant="outlined"
        color={config.colour}
        className={cssStyles.button}
        onClick={event.bind(this)}
        data-id={config.id}
      >
        {config.name}
      </Button>
    </Grid>
  );
};

export const PlayerSets = ({ cssStyles, sets, event }) => {
  return sets.map(function(item, key) {
    return (
      <Player cssStyles={cssStyles} config={item} event={event} key={key} />
    );
  });
};

export const Results = ({ styles, result }) => {
  let draw = "";
  if (result.user) {
    draw = (
      <Typography component="p">
        You: {result.user} Computer:{result.computer}
      </Typography>
    );
  }
  return (
    <Grid item xs={12}>
      <Paper className={styles.paper}>
        <Typography variant="h6" component="h3">
          {result.message}
        </Typography>
        {draw}
      </Paper>
    </Grid>
  );
};

export const decideWinner = (human, computer) => {
  human = parseInt(human);
  computer = parseInt(computer);

  if (human === computer) {
    return "It's a draw";
  }
  if (
    (human === DATA_ROCK && computer === DATA_SCISSORS) ||
    (human === DATA_PAPER && computer === DATA_ROCK) ||
    (human === DATA_SCISSORS && computer === DATA_PAPER)
  ) {
    return "You are the winner";
  }
  return "You lost";
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: { message: "Result", user: null, computer: null }
    };
  }

  Game = event => {
    let computer = Math.floor(Math.random() * 3);
    let user = event.currentTarget.dataset.id;

    let result = decideWinner(user, computer);

    this.setState({
      result: {
        message: result,
        user: sets[user].name,
        computer: sets[computer].name
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            className="board"
          >
            <PlayerSets cssStyles={classes} sets={sets} event={this.Game} />
            <Results styles={classes} result={this.state.result} />
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
