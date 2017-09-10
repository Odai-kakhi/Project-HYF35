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
		const { stack } = this.state
		const i = stack.length

		return (
			<div >
				<div className="calculator-display">{stack[i-4]}</div>
				<div className="calculator-display">{stack[i-3]}</div>
				<div className="calculator-display">{stack[i-2]}</div>
				<div className="calculator-display">{stack[i-1]}</div>
			</div>
		)
	}

}
