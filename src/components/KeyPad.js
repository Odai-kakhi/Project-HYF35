import React from 'react'
import Key from './Key'



export default class digitKeys extends React.Component {

	
	render() {

        return (
            <div className="input-keys">
                <div className="Keyboard--row">
                    <Key label="xʸ" /> 
                    <Key label="eˣ" /> 
                    <Key label="COS" /> 
                    <Key label="SIN" /> 
                    <Key label="TAN" />
                </div>

                <div className="Keyboard--row">
                <Key label="LOG" /> 
                <Key label="ARC" /> 
                <Key label="LN" /> 
                <Key label="CLR" /> 
                <Key label="RCL" /> 
                </div>
                <div className="Keyboard--row">
                <Key label="STO" /> 
                <Key label="R↓" /> 
                <Key label="x↔y" /> 
                <Key label="√x" /> 
                <Key label="¹/x" /> 
                </div>
                <div className="Keyboard--row">   
                <Key label="Enter" />
                <Key label="CHS" />
                <Key label="CLX" />
                <Key label="EEX" /> 
                </div>
                <div className="Keyboard--row">
                    
                    <Key label="÷" />
                    <Key label="1" />
                    <Key label="2" />
                    <Key label="3" />
                </div>
                <div className="Keyboard--row">
                    <Key label="x" />
                    <Key label="4" />
                    <Key label="5" />
                    <Key label="6" />
                 </div>   
                 <div className="Keyboard--row">
                    <Key label="-" />
                    <Key label="7" />
                    <Key label="8" />
                    <Key label="9" />
                 </div>
                    
                    
                    <div className="Keyboard--row">
                    <Key label="+" />
                    <Key label="0" />
                    <Key label="." />
                    <Key label="π" />
                </div>    
                
                
            </div>

			
		)
	}

}
