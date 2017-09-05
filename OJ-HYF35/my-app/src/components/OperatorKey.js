import React from 'react'
import PropTypes from 'prop-types'
import * as input from '../actions/input'


export default class OperatorKey extends React.Component {

	static propTypes = {
		label:   PropTypes.string.isRequired,
	}


	render() {
		const {label} = this.props
		return (
			<button className= {`calculator-key key-${label}`} onClick={()=> input.performOperation(label)}>
				{/*just send the string (this key was pressed)*/}
				{label}
			</button>
		)
	}

}
