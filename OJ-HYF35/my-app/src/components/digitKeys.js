import React from 'react'
import Digit from './Digit'
import OperatorKey from './OperatorKey'



export default class digitKeys extends React.Component {

	
	render() {

        return (
                <div className="digit-keys">
                    <div className="Keyboard--row">
                        <OperatorKey label="÷" />
                        <Digit label="1" />
                        <Digit label="2" />
                        <Digit label="3" />
                    </div>
                    
                    <div className="Keyboard--row">
                        <OperatorKey label="x" />
                        <Digit label="4" />
                        <Digit label="5" />
                        <Digit label="6" />
                    </div>
                    <div className="Keyboard--row">
                        <OperatorKey label="-" />
                        <Digit label="7" />
                        <Digit label="8" />
                        <Digit label="9" />
                    </div>
                    <div className="Keyboard--row">
                        <OperatorKey label="+" />
                        <Digit label="0" />
                        <Digit label="." />
                        <OperatorKey label="Clear" />
                    </div>
                    
                </div>    
                
			
		)
	}

}
