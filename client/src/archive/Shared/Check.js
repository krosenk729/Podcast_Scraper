import React from "react";
import PropTypes from "prop-types"; 

const Check = props => (
	<div className="input-check">
	<input 
	type="checkbox"
	value={props.val}
	onChange={props.onChange}
	name={props.name}
	id={props.name}
	/>
	<label htmlFor={props.name}>{props.children}</label>
	</div>
);

Check.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  val: PropTypes.string,
  onChange: PropTypes.func
};

export default Check;
