import React from 'react';
import store from './store';
import * as input from './actions/input';
import './App.css';

class App extends React.Component {

componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })

  }

  componentWillUnmount() {
    this.subscription.remove()
  }
 
  render() {
    const { displayValue } = this.state
   
    return (  
    <div className="calculator">
        <div className="calculator-display">{displayValue}</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button className="calculator-key key-clear" onClick={()=>input.clearDisplay()}>Clear</button>
              <button className="calculator-key key-clear" onClick={()=>input.clearDisplay()}>AC</button>
              <button className="calculator-key key-sign" onClick={()=> input.toggleSing()}>±</button>
              <button className="calculator-key key-percent" onClick={()=> input.inputPercent()}>%</button>
            </div>
            <div className="digit-keys">
              
              <button className="calculator-key key-0" onClick={() =>
              input.inputDigit(0)}>0</button>
              <button className="calculator-key key-dot" onClick={() => input.inputDot()}>●</button>
              <button className="calculator-key key-1" onClick={()=> input.inputDigit(1)}>1</button>
              <button className="calculator-key key-2" onClick={()=> input.inputDigit(2)}>2</button>
              <button className="calculator-key key-3" onClick={()=> input.inputDigit(3)}>3</button>
              <button className="calculator-key key-4" onClick={()=> input.inputDigit(4)}>4</button>
              <button className="calculator-key key-5" onClick={()=> input.inputDigit(5)}>5</button>
              <button className="calculator-key key-6" onClick={()=> input.inputDigit(6)}>6</button>
              <button className="calculator-key key-7" onClick={()=> input.inputDigit(7)}>7</button>
              <button className="calculator-key key-8" onClick={()=> input.inputDigit(8)}>8</button>
              <button className="calculator-key key-9" onClick={()=> input.inputDigit(9)}>9</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide" onClick={()=>input.performOperation('/')}>÷</button>
            <button className="calculator-key key-multiply" onClick={()=>input.performOperation('*')}>×</button>
            <button className="calculator-key key-subtract" onClick={()=>input.performOperation('-')}>−</button>
            <button className="calculator-key key-add" onClick={()=>input.performOperation('+')}>+</button>
            <button className="calculator-key key-equals" onClick={() => input.performOperation('=')}>Enter</button>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
