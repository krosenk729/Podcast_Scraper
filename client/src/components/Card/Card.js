import React from "react";
import PropTypes from "prop-types"; 
import "./Card.css";

export const Card = props => (
	<div className="card">
	{props.img ? 
	<div className="card-image"><img src={props.image} /></div> :
	null}
	{props.children}
	</div>
);

Card.PropTypes = {
	image: PropTypes.string,
	children: PropTypes.element.isRequired
}