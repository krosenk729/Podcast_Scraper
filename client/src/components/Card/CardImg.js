import React from "react";
import PropTypes from "prop-types";

export const CardImg = props => (
	<div className="card-image">
	<img src={props.img} alt="" />
	</div>
);

CardImg.PropTypes = {
	img: PropTypes.string.isRequired
}