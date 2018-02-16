import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			value: 'hi',
			myInput: '',
			styleCondition: true
		};

	}

	componentDidMount = () => {
		var node = ReactDOM.findDOMNode(this.refs.btn);
		console.log(node);
		node.classList.toggle('btn-menu-open');
		this.timerID = setInterval(
        () => this.tick(), 1000
		);
	}

	componentWillMount = () => {
		clearInterval(this.timerID);
	}


   myEvt = (event) => {
   	console.log(event.target.classList = "input1");
   	console.log(event.target.style);
   	this.setState({myInput: event.type})
   }

	tick = () => this.setState({ date: new Date()});

	render(){
		return (
			<div>
				<h1>{this.state.date.toLocaleTimeString()}
				</h1>
				<input style={ this.state.myInput === 'onKeyDown' ? {backgroundColor: '#FCE94FFF'} : {backgroundColor: '#14EBE2FF'}} onKeyDown={this.myEvt} /> 
				<hr/>
				<div>
					<a ref="btn" href="#" className="input1"><i>Hello</i></a>
				</div>
			</div>
		);
	}
}

export default Clock;