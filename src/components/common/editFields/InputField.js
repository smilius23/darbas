import React, { PropTypes } from 'react';
import style from './style';

const InputField = ({name, value, placeholder, onChange, onBlur}) => {
	return(
		<input
			style={style.inputField}
			type="text"
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onBlur={onBlur} />
	);
}

InputField.propTypes = {
	name: React.PropTypes.string,
	value: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onChange: React.PropTypes.func,
	onBlur: React.PropTypes.func
}

export default InputField;
