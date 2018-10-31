import React from "react";
import Confetti from "react-confetti";
import injectSheet from "react-jss";

const style = {
	confettiContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		maxHeight: "100vh",
		pointerEvents: "none"
	},
	confetti: {
		maxHeight: "100%"
	}
};
class GameEnd extends React.PureComponent {
	render() {
		const size = {
			width: window.innerWidth,
			height: window.innerHeight,
			numberOfPieces: 250
		};
		const { classes } = this.props;
		return (
			<div className={classes.confettiContainer}>
				<Confetti className={classes.confetti} {...size} />
			</div>
		);
	}
}

export default injectSheet(style)(GameEnd);
