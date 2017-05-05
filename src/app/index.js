import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>Hello World!!</div>
		);
	}
}

render(<App />, window.document.getElementById("app"));