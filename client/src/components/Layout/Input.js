import React from 'react';
import PropTypes from 'prop-types'; 

const Input = props => (
	<div className="input-field">
	<input 
	type='text'
	value={props.val}
	onChange={props.onChange}
	name={props.name}
	id={props.name}
	placeholder={props.placeholder}
	/>
	<label htmlFor={props.name} className='active'>{props.children}</label>
	</div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  placeholder: PropTypes.string,
  val: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
