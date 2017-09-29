import React from 'react'
import store from '../store'
import '../App.css'

export default class ProgramArea extends React.Component {


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
      programScreen : screenName
    })
  }
  handleSave(name, description) {
    console.log(name, description)
    // Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  if (Storage.name) {
    if (window.confirm("This program is already exist, do you want to overwrite it?")) {
      description = description + '\n\n```\n' + store.state.programText + '\n```'
      localStorage.setItem(name, description);
    }
  } else {
    description = description + '\n\n```\n' + store.state.programText + '\n```'
    localStorage.setItem(name, description);
  }
  
  
} else {
  alert("Sorry, your browser does not support Web Storage...")
}
  }

  render() {
    let programName = ''
    let programDescription = ''
    return (
      <div>
        <div className='SaveScreen' onClick={()=>{this.changeProgramScreen('ProgramArea')}}>
          Cancel
        </div>


          <label>

            <input type="text" className='programName' id = 'textArea'
             onChange={(event) => {
              programName = event.target.value
              }
            } />

            <textarea className='text-area' id = 'description' onChange={
              (event) => {
                programDescription = event.target.value
              }
            } /> 
          </label> 
          <button type="button" className = "run-button"
              onClick={()=>{this.handleSave(programName, programDescription)}}
          >
          Save
          </button>
      </div>
    );
  }
}


