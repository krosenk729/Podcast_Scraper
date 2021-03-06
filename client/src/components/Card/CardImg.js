import React from "react";
import PropTypes from "prop-types";

export const CardImg = props => (
	<div className="card__image">
	<img src={props.img} alt="" />
	</div>
);

CardImg.propTypes = {
	img: PropTypes.string.isRequired
}