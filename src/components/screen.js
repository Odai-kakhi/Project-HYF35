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
	  jalal() {console.log('jalal') }
	render() {
		const { stack } = this.state
		

		return (
			<div >
				<div className="calculator-display">
					<div id='t'>{stack[3]} </div>
					<div id='z'>{stack[2]} </div>
					<div id='y'>{stack[1]} </div>
					<div id='x'>{stack[0]} </div>
				</div>
			</div>
		)
	}

}
