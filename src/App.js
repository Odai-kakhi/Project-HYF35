import React from 'react'
import Screen from './components/screen'
import KeyPad from './components/KeyPad'
import * as input from './actions/input'
import * as Keyboard from './components/KeyboardCode'
import './App.css'
import ProgramArea from './components/ProgramArea'




class App extends React.Component {
  
  showScreen () {
  document.getElementById("btn1").classList.toggle("open");
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown)
  }
    
  handleKeyDown = (event) => {
    let { key } = event
    if (document.activeElement!==document.getElementById('textArea')) {
      input.performOperation(Keyboard.keyboardCode[key])
    }
    
  };
  render() {
    
    return (

      <div className='container'>  
        
      <div className="calculator">
        <button className="screen-button" onClick={()=>this.showScreen()}>
        Panel
        </button>
        <Screen />
        <div className="calculator-keypad">
          <KeyPad />
        </div>
        <div className='programmedscreen' id='btn1'>
          <ProgramArea/>
        </div>
      </div>
    </div>

    );
  }
}

export default App;
