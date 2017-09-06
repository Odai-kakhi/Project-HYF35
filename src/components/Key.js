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
			<button className= {`calculator-key key-${label}`} onClick={()=> input.performOperation(label)}>
				{label}
			</button>
		)
	}

}
