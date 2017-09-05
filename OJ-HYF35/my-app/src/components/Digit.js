import React from 'react'
import PropTypes from 'prop-types'
import * as input from '../actions/input'


export default class Digit extends React.Component {

	static propTypes = {
		label:   PropTypes.string.isRequired,
	}


	render() {
		const {label} = this.props
		return (
			<button className= {`calculator-key key-${label}`} onClick={()=> input.inputDigit(label)}> 
				{/*change the function (inputDigit) make it one for the all buttons
				onClick for the keypad 
				push the string to the calc proceser
				*/}
				{label}
			</button>
		)
	}

}
