import React from 'react'
import Screen from './components/screen'
import KeyPad from './components/KeyPad'
import * as input from './actions/input'
import * as Keyboard from './components/KeyboardCode'
import './App.css'

class App extends React.Component {

 

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    let { key } = event
    input.performOperation(Keyboard.keyboardCode[key])
    console.log(key)
  };

  render() {

    return (
      <div className="calculator">
        <Screen />
        <div className="calculator-keypad">
          <KeyPad />
        </div>
      </div>

    );
  }
}

export default App;
