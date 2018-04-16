import React from 'react';

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
	<label htmlFor={props.name}>{props.children}</label>
	</div>
);


export default Input;
