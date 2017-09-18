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
		

		return (
			<div >
				<div className="calculator-display">{stack[3]}</div>
				<div className="calculator-display">{stack[2]}</div>
				<div className="calculator-display">{stack[1]}</div>
				<div className="calculator-display">{stack[0]}</div>
			</div>
		)
	}

}
