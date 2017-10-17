import React from 'react'
import store from './store'
import Screen from './components/screen'
import KeyPad from './components/KeyPad'
import * as input from './actions/input'
import * as Keyboard from './components/KeyboardCode'
import './App.css'
import ProgramArea from './components/ProgramArea'
import SaveScreen from './components/SaveScreen'
import LoadScreen from './components/LoadScreen'
import LoadServer from './components/LoadServer'
import LogIn from './singUI/logIn'
import SaveServer from './components/saveServer'

class App extends React.Component {
    
    handleButtonClick() {
     this.setState(this.state);
  }

  showScreen () {
  document.getElementById("btn1").classList.toggle("open");
  }
  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
    document.removeEventListener('keyup', this.handleKeyDown)
  }
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown)
    console.log(<LogIn/>)
  }
  

    
  handleKeyDown = (event) => {
    
    let { key } = event
    if (document.activeElement!==document.getElementById( 'textArea')&& document.activeElement!==document.getElementById( 'description')&& document.activeElement!==document.getElementById( 'firstname')&& document.activeElement!==document.getElementById( 'lastname')&& document.activeElement!==document.getElementById( 'password')&& document.activeElement!==document.getElementById( 'cpassword')&& document.activeElement!==document.getElementById( 'email')) {
      input.performOperation(Keyboard.keyboardCode[key])
    }
    //firstname lastname password cpassword email
  };

  render() {
    let screen;
    switch (store.state.programScreen) {
      case 'SaveScreen':
        screen = (<SaveScreen />)
        break;
        
      case 'LoadScreen':
        screen = (<LoadScreen />)
        break

      case 'LoadServer':
        screen = (<LoadServer />)
        break

        case 'SaveServer':
        screen = (<SaveServer />)
        break

      default:
        screen = (<ProgramArea />);
        // default is 'ProgramArea'


    }
    return (
       
      <div className='container'>  
      
       <div className='log-in'>
        <LogIn/>
        </div>
        <div className="calculator">        
        <Screen />
        <div className="calculator-keypad">
          <KeyPad />
        </div>
        <div className='programmedscreen' id='btn1'>
        {screen}
        </div>
      </div>
      
    
    </div>

    );
  }
}

export default App;

        
