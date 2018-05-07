import React from "react";
import PropTypes from "prop-types"; 

export const CardBody = props => (
	<div className="card-body">
	{props.children}
	</div>
);

CardBody.propTypes = {
	children: PropTypes.any.isRequired
}