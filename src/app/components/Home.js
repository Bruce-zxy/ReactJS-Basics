import React from "react";

export class Home extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		age: props.initialAge,
	  };
	}
	onMakeOlder() {
		this.setState({
			age: this.state.age + 3,
		})
	}
	render() {
		return (
			<div>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<hr/>
				<button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
			</div>
		)
	}
}