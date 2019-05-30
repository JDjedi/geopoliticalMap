import React from 'react';
import { Meteor } from 'meteor/meteor'

import PublicHeader from './PublicHeader';
import NorthAmerica from './continents/NorthAmerica';
import SouthAmerica from './continents/SouthAmerica';

export default class MainMap extends React.Component {
	constructor(props) {
		super(props);				
		this.state = {};
	}

	render() {
		return (
			<div>
				<PublicHeader title="Geopolitics"/>
				<h1>Welcome to Geopolitical Map splash page.</h1>
				<div className="page-content">
					<div className="main-map-view">
						<NorthAmerica />
						<SouthAmerica />
					</div>		
				</div>
			</div>
		)
	}
}


