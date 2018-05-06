import React from "react";
import PropTypes from "prop-types"; 
import "./Card.css";

export const Card = props => (
	<div className="card">
	{props.children}
	</div>
);

Card.PropTypes = {
	children: PropTypes.element.isRequired
}