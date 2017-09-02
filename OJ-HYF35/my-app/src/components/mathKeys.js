import React from 'react'
import OperatorKey from './OperatorKey'



export default class mathKeys extends React.Component {


    render() {

        return (
            <div className="math-keys">
                <OperatorKey label="COS" />
                <OperatorKey label="SIN" />
                <OperatorKey label="LOG" />
                <OperatorKey label="ARC" />
                <OperatorKey label="TAN" />
            </div>


        )
    }

}
