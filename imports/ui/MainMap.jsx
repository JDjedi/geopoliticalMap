import React from 'react';
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component {
	constructor(props) {
		super(props);				
		this.state = {
			error: ''
		};
	}

	render() {
		return (
			<div className="main-map-view">
				<h1>Welcome to the map view</h1>
				<p>Here is some paragraph</p>
				{this.state.error && <p>{this.state.error}</p>} 
			</div>

		)
	}
}