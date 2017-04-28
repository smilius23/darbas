import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import InputField from './InputField';
import pencil from '../../../stylesJs/images/svg/pencil.svg';
import PencilIcon from '../images/icons/PencilIcon';

import style from './style';

class InputFieldWithLabelRW extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.value,
			editFieldMode: 'labelMode'
		}
	}

	handleChange=(event)=>{
		this.setState({
			text: event.target.value
		});
	}

	inputFieldKeyPress=(event)=>{
		if (event.key === 'Enter') {
      this.enterValue(event.target.value);
    }
	}

	handleOnBlur=(event)=>{
		this.enterValue(event.target.value);
	}

	enterValue=(value)=>{
		this.props.enterValue(value);
		this.setState({
			text: value,
			editFieldMode: 'labelMode'
		});
	}

	handleOnClickTextValue=()=>{
		this.setState({
			editFieldMode: 'editMode'
		});
	}

	mouseOver=()=>{
		this.setState({
			editFieldMode: 'mouseOverMode'
		});
	}

	mouseOut=()=>{
		this.setState({
			editFieldMode: 'labelMode'
		});
	}

	componentDidUpdate=()=>{
		if(this.editModefocus){
			this.editModefocus.focus();
		}
	}

	render(){
		const pencilProps = {
	    fill: 'white',
	    width: '13',
	    height: '13'
	  }
		let statment = <div
											style={style.textValue}
											onMouseOver={this.mouseOver}>
										{this.state.text}
										</div>
		switch(this.state.editFieldMode){
			case 'editMode':
				statment = <input
					ref={(input)=>{this.editModefocus= input}}
					style={style.inputField}
					type="text"
					value={this.state.text}
					onChange={this.handleChange}
					onKeyPress={this.inputFieldKeyPress}
					onBlur={this.handleOnBlur} />
				break;
			case 'mouseOverMode':
				statment = <div style={style.container}>
											<div
													style={style.textValueMouseOver}
													onMouseOut={this.mouseOut}
													onClick={this.handleOnClickTextValue}>
														{this.state.text}
													<div style={style.pencilIcon}>
														<PencilIcon {...pencilProps} />
													</div>
												</div>
											</div>
				break;
			default: statment
			}

		return (
			<div style={style.container}>
				<div style={style.label}>{this.props.label}</div>
				{statment}
			</div>
		)
	}
}

InputFieldWithLabelRW.propTypes = {
	label: React.PropTypes.string,
	value: React.PropTypes.string,
	enterValue: React.PropTypes.func
}

InputFieldWithLabelRW.defaultProps = {
	value: '',
	label: 'Label'
};

export default InputFieldWithLabelRW;
