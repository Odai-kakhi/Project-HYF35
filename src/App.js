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


class App extends React.Component {
  
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
    
    this.importFromSQL()
  }
  

    
  handleKeyDown = (event) => {
    
    let { key } = event
    if (document.activeElement!==document.getElementById( 'textArea')&& document.activeElement!==document.getElementById( 'description')) {
      input.performOperation(Keyboard.keyboardCode[key])
    }
    
  };
  importFromSQL() {
  
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "http://localhost:8888/", true);
    myRequest.onload = function(){
      var myArr = JSON.parse(this.responseText); 
      console.log(myArr);
    };
     myRequest.send();
}
  render() {
    let screen;
    switch (store.state.programScreen) {
      case 'SaveScreen':
        screen = (<SaveScreen />);
        break;
        
      case 'LoadScreen':
        screen = (<LoadScreen />)
        break

      default:
        screen = (<ProgramArea />);
        // default is 'ProgramArea'


    }
    return (

      <div className='container'>  
        
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
