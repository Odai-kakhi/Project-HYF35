import React from 'react'
import OperatorKey from './OperatorKey'



export default class mathKeys extends React.Component {


    render() {

        return (
         <div className="math-keys">
            <div className="Keyboard--row">
                <OperatorKey label="COS" /> 
                <OperatorKey label="SIN" /> 
                <OperatorKey label="LOG" /> 
                <OperatorKey label="ARC" /> 
                <OperatorKey label="TAN" />
            </div>
            <div className="Keyboard--row">
                <OperatorKey label="LN" /> 
                <OperatorKey label="CLR" /> 
                <OperatorKey label="RCL" /> 
                <OperatorKey label="STO" /> 
                <OperatorKey label="R↓" /> 

            </div>
            <div className="Keyboard--row">
               
                <OperatorKey label="x↔y" /> 
                <OperatorKey label="√x" /> 
                <OperatorKey label="¹/x" /> 
                <OperatorKey label="xʸ" /> 
                <OperatorKey label="π" /> 
            </div>
            <div className="Keyboard--row">
             <OperatorKey label="Enter"/>
             <OperatorKey label="CHS" /> 
             <OperatorKey label="EEX" />  
            </div>
         </div>


        )
    }

}
