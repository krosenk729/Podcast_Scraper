import React from "react";
import PropTypes from "prop-types"; 
import "./Figure.css";

export const FigureCircle = props => (
	<figure className="figure--fancy">
	<div className="figure__media">
	<img src={props.img} alt={props.alt || ""} />
	</div>
	</figure>
);

FigureCircle.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string,
	caption: PropTypes.string
}