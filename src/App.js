import React from 'react'
import Screen from './components/screen'
import KeyPad from './components/KeyPad'

import './App.css'

class App extends React.Component {

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
