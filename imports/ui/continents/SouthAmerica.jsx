import React from 'react';
import { Meteor } from 'meteor/meteor'


export default class SouthAmerica extends React.Component {
	constructor(props) {
		super(props);				
		this.state = {};
	}

	render() {
		return (
			<div className="south-america-view">
				<h1>South America</h1>
				<div>
					<div>Colombira</div>
					<div>Venzuela</div>
					<div>Ecuador</div>
					<div>Guyana</div>
					<div>Suriname</div>
					<div>Brazil</div>
					<div>Peru</div>
					<div>Bolivia</div>
					<div>Chile</div>
					<div>Paraguay</div>
					<div>Uruguay</div>
					<div>Argentina</div>
				</div>

			</div>

		)
	}
}