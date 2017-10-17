import React from 'react'
import PropTypes from 'prop-types'
import * as input from '../actions/input'


export default class Key extends React.Component {
	
	static propTypes = {
		label:   PropTypes.string.isRequired,
	}
	
	
	render() {
		const {label, keyCode} = this.props
		return (
			<button className= {`calculator-key key-${label}`} onClick={()=> input.performOperation(keyCode)}  >
			{label}
			</button>
		)
	}
	
}
