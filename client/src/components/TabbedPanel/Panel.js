import React from "react";
import PropTypes from "prop-types"; 

export const Panel = props => (
	<React.Fragment>
	<label htmlFor={"tab-" + props.index} tabIndex="0"></label>
	<input id={"tab-" + props.index} defaultChecked={props.index == "0"} type="radio" name="tabs" aria-hidden="true" />
	<h3 className="tab-title">{props.title}</h3>
	<div>
	{props.children}
	</div>
	</React.Fragment>
);

Panel.propTypes = {
	index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired
}