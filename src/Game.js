import React from 'react';

class Square extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			value: null,
		};
	}
	render() {
		return(
			<button className="square" onClick={() => this.setState({value: 'X'})}>
			{this.state.value}
			</button>
		);
	}
}

class Board extends React.Component {

	renderSquare(i) {
		return <Square  value={i}/>;
	}

	render() {
		const status = 'Next Player: X';
		return(
			<div>
				<div className="status"><h1 style={{fontSize: '44px', fontFamily: 'sans-serif'}}>{status}</h1></div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return(
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* Status*/}</div>
				<ol>{/* TODO*/}</ol>
				</div>
			</div>
		);
	}
}

export default Game;