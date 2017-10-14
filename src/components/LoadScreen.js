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
        <li className='listItems' key={program.toString()} 
      >
        <div className="delete"
          onClick={() => {
            this.HandleDelete(program)
            }
          }
          
          >
          Delete
          </div>
        <div onClick={() => {
            store.setState({
              programText: localStorage.getItem(program)
            })
            this.changeProgramScreen('ProgramArea')
          }
        }>  
        <div className= 'LiName'>{program}</div>
        </div>

      </li>
    );
    return (
      <div className = 'program-list-container'>
      <ul className = " program-list">{listItems}</ul>
      </div>
    );
  }


  render() {

    return (
      <div>
        <div className='cancel' onClick={() => { this.changeProgramScreen('ProgramArea') }}>
          Cancel
        </div>
        {this.programList()}
      </div>
    );
  }
}


