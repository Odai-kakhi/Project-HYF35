import React from 'react'
import Key from './Key'



export default class digitKeys extends React.Component {

	
	render() {

        return (
            <div className="input-keys">
                <div className="Keyboard--row">
                    <Key label="xʸ" /> 
                    <Key label="LOG" />
                    <Key label="LN" /> 
                    <Key label="eˣ" /> 
                    <Key label="CLR" /> 
                   
                </div>

                <div className="Keyboard--row">
                    <Key label="√x" /> 
                    <Key label="ARC" /> 
                    <Key label="SIN" /> 
                    <Key label="COS" /> 
                    <Key label="TAN" />        
                </div>
                <div className="Keyboard--row">
                <Key label="¹/x" /> 
                <Key label="x↔y" />
                <Key label="R↓" /> 
                <Key label="STO" />
                <Key label="RCL" /> 
                </div>
                <div className="Keyboard--row">   
                <Key label="Enter" />
                <Key label="CHS" />
                <Key label="EEX" /> 
                <Key label="CLX" />
                </div>
                <div className="Keyboard--row">
                    
                    <Key label="-" />
                    <Key label="1" />
                    <Key label="2" />
                    <Key label="3" />
                </div>
                <div className="Keyboard--row">
                    <Key label="+" />
                    <Key label="4" />
                    <Key label="5" />
                    <Key label="6" />
                 </div>   
                 <div className="Keyboard--row">
                    <Key label="x" />
                    <Key label="7" />
                    <Key label="8" />
                    <Key label="9" />
                 </div>
                    
                    
                    <div className="Keyboard--row">
                    <Key label="÷" />
                    <Key label="0" />
                    <Key label="." />
                    <Key label="π" />
                </div>    
                
                
            </div>

			
		)
	}

}
