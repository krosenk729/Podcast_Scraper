import React from "react";
import PropTypes from "prop-types"; 

export const Panel = props => (
	<React.Fragment>
	<label htmlFor={"tab-" + props.index} tabIndex="0"></label>
	<input id={"tab-" + props.index} type="radio" name="tabs" aria-hidden="true" />
	<h3 className="tab-title">{props.title}</h3>
	<div>
	{props.children}
	</div>
	</React.Fragment>
);

Panel.PropTypes = {
	index: PropTypes.number,
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}