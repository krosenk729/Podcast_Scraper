import React from "react";
import PropTypes from "prop-types";
import {FigureCircle} from "../Figure";

export const CardFigure = props => (
	<figure className="card__figure">
	<FigureCircle img={props.img} alt={props.alt} caption={props.caption} />
	</figure>
);

CardFigure.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string,
	caption: PropTypes.string
}