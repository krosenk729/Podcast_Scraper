import React from "react";
import PropTypes from "prop-types"; 

export const CardActions = props => (
	<div className="card-actions">
	{props.children}
	</div>
);

CardActions.PropTypes = {
	children: PropTypes.element.isRequired
}