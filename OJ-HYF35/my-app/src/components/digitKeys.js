import React from 'react'
import Digit from './Digit'
import OperatorKey from './OperatorKey'



export default class digitKeys extends React.Component {

	
	render() {

        return (
            <div className="input-keys">
                <div className="function-keys">
                    <OperatorKey label="EEX" />  
                    <OperatorKey label="CLX" /> 
                    <OperatorKey label="ex" /> 
                </div>
                <div className="digit-keys">
                    <OperatorKey label="Clear" />
                    <Digit label="0" />
                    <Digit label="." />
                    <Digit label="1" />
                    <Digit label="2" />
                    <Digit label="3" />
                    <Digit label="4" />
                    <Digit label="5" />
                    <Digit label="6" />
                    <Digit label="7" />
                    <Digit label="8" />
                    <Digit label="9" />
                </div>    
                
            </div>

			
		)
	}

}
