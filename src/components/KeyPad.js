import React from 'react'
import Key from './Key'



export default class digitKeys extends React.Component {

	
	render() {

        return (
            <div className="input-keys">
                <div className="function-keys">
                    <Key label="EEX" />  
                    <Key label="CLX" /> 
                    <Key label="eˣ" /> 
                </div>
                <div className="digit-keys">
                    <Key label="Clear" />
                    <Key label="0" />
                    <Key label="." />
                    <Key label="1" />
                    <Key label="2" />
                    <Key label="3" />
                    <Key label="4" />
                    <Key label="5" />
                    <Key label="6" />
                    <Key label="7" />
                    <Key label="8" />
                    <Key label="9" />
                </div>    
                <div className="math-keys">
                <Key label="COS" /> 
                <Key label="SIN" /> 
                <Key label="LOG" /> 
                <Key label="ARC" /> 
                <Key label="TAN" /> 
                <Key label="LN" /> 
                <Key label="CLR" /> 
                <Key label="RCL" /> 
                <Key label="STO" /> 
                <Key label="R↓" /> 
                <Key label="x↔y" /> 
                <Key label="√x" /> 
                <Key label="¹/x" /> 
                <Key label="xʸ" /> 
                <Key label="π" /> 
                </div>
                <div className="operator-keys">
                <Key label="÷" />
                <Key label="x" />
                <Key label="-" />
                <Key label="+" />
                <Key label="Enter" />
                </div>
            </div>

			
		)
	}

}
