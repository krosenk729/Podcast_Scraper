import React from "react";
import PropTypes from "prop-types"; 
import "./Hero.css";

export const Hero = props => (
	<div className="hero">
	{props.children}
	</div>
);

Hero.propTypes = {
	children: PropTypes.element.isRequired
}