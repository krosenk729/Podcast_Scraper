import React from "react";
import PropTypes from "prop-types"; 
import "./Figure.css";

export const FigureCircle = props => (
	<figure className="figure figure--fancy">
	<div className="figure__image">
	<img src={props.img} alt={props.alt || ""} />
	</div>
	{props.caption 
		? 
		<figcaption className="figure-caption">
		<span className="figure-caption__pre-hover"></span>
		<span className="figure-caption__post-hover"></span>
		</figcaption>
		:
		null
	}
	</figure>
);

FigureCircle.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string,
	caption: PropTypes.string
}