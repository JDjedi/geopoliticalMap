import React from 'react';
import { Meteor } from 'meteor/meteor'
import PropTypes from 'prop-types'; 

// stateless functional component pattern when needing proptypes to be passed
const PublicHeader = (props) => {
	return(
		<div className="header">
			<div className="wrapper">
				<h3>{props.title}</h3>
			</div>
		</div>
	)
};


PublicHeader.propTypes = {
	title: PropTypes.string.isRequired,
}


export default PublicHeader;
