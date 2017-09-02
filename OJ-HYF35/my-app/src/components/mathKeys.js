import React from 'react'
import OperatorKey from './OperatorKey'



export default class mathKeys extends React.Component {


    render() {

        return (
         <div className="math-keys-contianer">
            <div className="math-keys">
                <OperatorKey label="COS" /> 
                <OperatorKey label="SIN" /> 
                <OperatorKey label="LOG" /> 
                <OperatorKey label="ARC" /> 
                <OperatorKey label="TAN" /> 
            </div>
            <div className="math-keys">
                <OperatorKey label="LN" /> 
                <OperatorKey label="CLR" /> 
                <OperatorKey label="RCL" /> 
                 <OperatorKey label="STO" /> 
                <OperatorKey label="R↓" /> 
            </div>
            <div className="math-keys">
               
                <OperatorKey label="x↔y" /> 
                <OperatorKey label="√" /> 
                <OperatorKey label="1/x" /> 
                <OperatorKey label="γx" /> 
                <OperatorKey label="Π" /> 
            </div>
            
         </div>


        )
    }

}
