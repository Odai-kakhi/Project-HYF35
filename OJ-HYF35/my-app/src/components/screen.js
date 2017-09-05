import React from 'react'
import store from '../store'

export default class screen extends React.Component {

	

	componentWillMount() {
		this.subscription = store.subscribe(state => {
		  this.setState(state)
		})
	
	  }
	
	  componentWillUnmount() {
		this.subscription.remove()
	  }
	
	render() {
		const { value, displayValue } = this.state // change value to stack 
		// const [x,y,z,t] = stack
		const i = value.length

		return (
			<div >
				<div className="calculator-display">{value[i-3]}</div>
				<div className="calculator-display">{value[i-2]}</div>
				<div className="calculator-display">{value[i-1]}</div>
				<div className="calculator-display">{displayValue}</div>
			</div>
		)
	}

}
