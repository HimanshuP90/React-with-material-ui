import React from 'react';

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date()
		};
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.timerID = setInterval(
        () => this.tick(), 1000
		);
	}

	componentWillMount() {
		clearInterval(this.timerID);
	}


	tick(){
		this.setState({ date: new Date()});
	}

	render(){
		return (
			<h1>{this.state.date.toLocaleTimeString()}</h1>
		);
	}
}

export default Clock;