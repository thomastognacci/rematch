import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Scoreboard from "./Scoreboard";
import SelectDifficulty from "./SelectDifficulty";

const style = {
  mainMenu: {
    flexShrink: "0",
    flexBasis: "20em",
    color: "#673ab7",
    borderRight: "3px solid",
    borderRightColor: "#673ab7",
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 60em)": {
      position: "fixed",
      display: "block",
      width: "100%",
      height: "100%",
      overflow: "auto",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      background: "#FFF",
      zIndex: "1",
      border: "none",
      transition: "transform .25s ease-out",
      transform: (props) => (props.menuOpen ? "translateX(0)" : "translateY(-100%)"),
    },
  },
  topMenu: {
    padding: "1rem",
    "@media (max-width: 60em)": {
      marginTop: "80px",
    },
  },
};
class Menu extends React.PureComponent {
  render() {
    const {
      classes,
      handleDifficultyChange,
      difficulty,
      handleRestart,
      handleStart,
      gameStarted,
      lastGameScore,
      handleIsSignedIn,
    } = this.props;
    let difficultyString = "Easy";
    if (difficulty === 1) difficultyString = "Medium";
    if (difficulty === 2) difficultyString = "Hard";

    return (
      <div className={classes.mainMenu}>
        <div className={classes.topMenu}>
          <SelectDifficulty
            difficulty={difficulty}
            handleDifficultyChange={handleDifficultyChange}
          />
          {gameStarted ? (
            <Button onClick={handleRestart} fullWidth={true} variant="contained" color="secondary">
              <Typography variant="button">Restart</Typography> &nbsp;-&nbsp;
              <Typography variant="caption">{difficultyString}</Typography>
            </Button>
          ) : (
            <Button onClick={handleStart} fullWidth={true} variant="contained" color="primary">
              Start!
            </Button>
          )}
        </div>
        <Scoreboard handleIsSignedIn={handleIsSignedIn} lastGameScore={lastGameScore} />
      </div>
    );
  }
}

Menu.propTypes = {
  handleStart: PropTypes.func.isRequired,
  handleRestart: PropTypes.func.isRequired,
  handleDifficultyChange: PropTypes.func.isRequired,
  handleIsSignedIn: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  difficulty: PropTypes.number.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  lastGameScore: PropTypes.number.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};
export default injectSheet(style)(Menu);
