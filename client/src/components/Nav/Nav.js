import React from "react";
import PropTypes from "prop-types"; 
import "./Nav.css";

export const Nav = props => (
	<nav className="nav">
	{props.children}
	</nav>
);

Nav.propTypes = {
	children: PropTypes.element.isRequired
}