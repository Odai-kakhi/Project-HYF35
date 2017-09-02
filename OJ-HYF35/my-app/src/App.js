import React from 'react'
import Screen from './components/screen'
import DigitKeys from './components/digitKeys'
import OperatorKeys from './components/operatorKeys'
import MathKeys from './components/mathKeys'
import './App.css'

class App extends React.Component {

  render() {

    return (
      <div className="calculator">
        <Screen />
        <div className="calculator-keypad">
          <DigitKeys />
          <OperatorKeys />
          <MathKeys />
          <MathKeys />


        </div>
      </div>

    );
  }
}

export default App;
