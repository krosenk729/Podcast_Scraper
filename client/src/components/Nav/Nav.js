import React from "react";
import PropTypes from "prop-types"; 
import "./Nav.css";

export const Nav = props => (
	<nav className="nav">
		<ul>
		<li>Podcasts</li>
		<li>Episodes</li>
		</ul>
	</nav>
);

Nav.PropTypes = {
	children: PropTypes.element.isRequired
}