import React from 'react'
import store from '../store'
import '../App.css'

export default class LoadScreen extends React.Component {


  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  changeProgramScreen(screenName) {
    console.log(screenName)
    store.setState({
      programScreen: screenName
    })
  }

  HandleDelete(program) {
    localStorage.removeItem(program)
    this.changeProgramScreen('LoadScreen')
  }

  programList() {
    const listItems = Object.keys(localStorage).map((program) =>
        <li key={program.toString()} 
      >
        <div className="delete"
          onClick={() => {
            this.HandleDelete(program)
            }
          }
          
          >
          X
          </div>
        <div onClick={() => {
            store.setState({
              programText: localStorage.getItem(program)
            })
            this.changeProgramScreen('ProgramArea')
          }
        }>  
          {program}
        </div>

      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }


  render() {

    return (
      <div>
        <div className='SaveScreen' onClick={() => { this.changeProgramScreen('ProgramArea') }}>
          Cancel
        </div>
        {this.programList()}
      </div>
    );
  }
}


