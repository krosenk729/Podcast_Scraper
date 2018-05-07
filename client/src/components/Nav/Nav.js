import React from "react";
import PropTypes from "prop-types"; 
import "./Nav.css";

export const Nav = props => (
	<div className="nav">
	{props.children}
	</div>
);

Nav.PropTypes = {
	children: PropTypes.element.isRequired
}