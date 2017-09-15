import React from 'react'
import Key from './Key'
import * as k from './KeyCodes'


export default class digitKeys extends React.Component {

	
	render() {

        return (
            <div className="input-keys">
                <div className="Keyboard--row">
                    <Key label="xʸ" keyCode={k.POW} /> 
                    <Key label="eˣ" keyCode={k.EXP} /> 
                    <Key label="COS" keyCode={k.COS} /> 
                    <Key label="SIN" keyCode={k.SIN} /> 
                    <Key label="TAN" keyCode={k.TAN} />
                </div>

                <div className="Keyboard--row">
                <Key label="LOG" keyCode={k.LOG} /> 
                <Key label="ARC" keyCode={k.ARC} /> 
                <Key label="LN" keyCode={k.LN} /> 
                <Key label="CLR" keyCode={k.CLR} /> 
                <Key label="RCL" keyCode={k.RCL} /> 
                </div>
                <div className="Keyboard--row">
                <Key label="STO" keyCode={k.STO} /> 
                <Key label="R↓" keyCode={k.ROLL_DOWN} /> 
                <Key label="x↔y" keyCode={k.SWAP} /> 
                <Key label="√x" keyCode={k.SQRT} /> 
                <Key label="¹/x" keyCode={k.RECIPROCAL} /> 
                </div>
                <div className="Keyboard--row">   
                <Key label="Enter" keyCode={k.ENTER} />
                <Key label="CHS" keyCode={k.CHS} />
                <Key label="CLX" keyCode={k.CLX} />
                <Key label="EEX" keyCode={k.EEX} /> 
                </div>
                <div className="Keyboard--row">
                    
                    <Key label="÷" keyCode={k.DIV} />
                    <Key label="1" keyCode={k.D1} />
                    <Key label="2" keyCode={k.D2} />
                    <Key label="3" keyCode={k.D3} />
                </div>
                <div className="Keyboard--row">
                    <Key label="x" keyCode={k.MUL} />
                    <Key label="4" keyCode={k.D4} />
                    <Key label="5" keyCode={k.D5} />
                    <Key label="6" keyCode={k.D6} />
                 </div>   
                 <div className="Keyboard--row">
                    <Key label="-" keyCode={k.SUB} />
                    <Key label="7" keyCode={k.D7} />
                    <Key label="8" keyCode={k.D8} />
                    <Key label="9" keyCode={k.D9} />
                 </div>
                    
                    
                    <div className="Keyboard--row">
                    <Key label="+" keyCode={k.ADD} />
                    <Key label="0" keyCode={k.D0} />
                    <Key label="." keyCode={k.DOT} />
                    <Key label="π" keyCode={k.PI} />
                </div>    
                
                
            </div>

			
		)
	}

}
