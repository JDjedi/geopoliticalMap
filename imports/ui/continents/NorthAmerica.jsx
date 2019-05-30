import React from 'react';
import { Meteor } from 'meteor/meteor'


export default class NorthAmerica extends React.Component {
	constructor(props) {
		super(props);				
		this.state = {};
	}

	render() {
		return (
			<div className="north-america-view">
				<h1>North America</h1>
				<div>Greenland</div>
				<div>Canada</div>
				<div>The United States</div>
				<div>Mexico</div>
				<div>Costa Rica</div>
				<div>Cuba</div>
				<div>Dominican Republic</div>
				<div>El Salvador</div>
				<div>Greenland</div>
				<div>Guatemala</div>
				<div>Hondouras</div>
				<div>Haiti</div>
				<div>Nicaragua</div>
				<div>Panama</div>
				<div>Belieze</div>
			</div>

		)
	}
}