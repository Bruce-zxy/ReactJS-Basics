import React from "react";
import ReactDOM from 'react-dom';

import { Button } from 'antd';

export class Home extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		age: props.initialAge,
	  		status: 0,
	  		homeLink: ["Changed Link", "Change Again", "Once Again", "Home"],
	  };
	  setInterval(() => {
	  	 this.setState({
	  	 	status: this.state.status + 1,
	  	 })
	  }, 1000);
	}
	onMakeOlder() {
		this.setState({
			age: this.state.age + 3,
		})
	}
	onChangeLink() {
		let rand = parseInt(Math.random()*4);
		this.props.changeLink(this.state.homeLink[rand]);
	}
	render() {
		return (
			<div>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<p>This status is: {this.state.status}</p>
				<hr/>
				{this.props.children}
				<hr/>
				<button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
				<hr/>
				<button className="btn btn-primary" onClick={() => this.onChangeLink()} >Change the Link</button>
		        <Button type="primary">Primary</Button>
	            <Button>Default</Button>
	            <Button type="dashed">Dashed</Button>
	            <Button type="danger">Danger</Button>
	            <hr/>
			</div>
		)
	}
}
