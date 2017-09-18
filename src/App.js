import React from 'react'
import Screen from './components/screen'
import KeyPad from './components/KeyPad'
import * as input from './actions/input'
import * as Keyboard from './components/KeyboardCode'
import './App.css'



class App extends React.Component {
  
  showScreen () {
  document.getElementById("btn1").classList.toggle("open");
  document.getElementById("btn1").classList.toggle("close");
  }

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

      <div>  
        
      <div className="calculator">
        <button className="screen-button" onClick={()=>this.showScreen()}>
        
        </button>
        <Screen />
        <div className="calculator-keypad">
          <KeyPad />
        </div>
        <div className='programmedscreen' id='btn1'>
          <input className='text-area' type='text' />
        </div>
      </div>
    </div>

    );
  }
}

export default App;
