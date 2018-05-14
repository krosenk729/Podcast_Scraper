import React from "react";
import PropTypes from "prop-types"; 

export const CardFooter = props => (
	<div className="card__footer">
	{props.children}
	</div>
);

CardFooter.propTypes = {
	children: PropTypes.any.isRequired
}