import React from 'react'
import OperatorKey from './OperatorKey'



export default class operatorKeys extends React.Component {

	
	render() {

        return (
            <div className="operator-keys">
            <OperatorKey label="÷" />
            <OperatorKey label="x" />
            <OperatorKey label="-" />
            <OperatorKey label="+" />
            <OperatorKey label="Enter" />
          </div>

			
		)
	}

}
