import React from 'react';
import { Meteor } from 'meteor/meteor'

import PrivateHeader from './PrivateHeader';
import MainMap from './MainMap';

export default () => {
	return(
		<div>
			<PrivateHeader title="Dashboard"/>
			<div className="page-content">
				<MainMap />
			</div>
		</div>
	)
}