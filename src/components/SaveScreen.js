import React from 'react'
import store from '../store'
import '../App.css'

export default class SaveScreen extends React.Component {


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
  handleSave(Name, description) {
    console.log(Name, description)
    // Check browser support
    if (typeof (Storage) !== "undefined") {
      // Store
      if (Object.keys(localStorage).indexOf(Name) !== -1) {
        if (window.confirm("This program is already exist, do you want to overwrite it?")) {
          description = description + '\n\n```\n' + store.state.programText + '\n```'
          localStorage.setItem(Name, description);
        }
      } else {
        description = description + '\n\n```\n' + store.state.programText + '\n```'
        localStorage.setItem(Name, description);
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
        <div className='cancel-but' onClick={() => { this.changeProgramScreen('ProgramArea') }}>
          Cancel
        </div>


        <label>

          <input type="text" className='programName' id='textArea' placeholder='Name'
            onChange={(event) => {
              programName = event.target.value
            }
            } />

          <textarea className='text-area' placeholder="Description" id='description' onChange={
            (event) => {
              programDescription = event.target.value
            }
          } />
        </label>
        <button type="button" className="save-button"
          onClick={() => {
              this.handleSave(programName, programDescription)
             this.changeProgramScreen('ProgramArea')
            }
          }
        >
          Save
          </button>
      </div>
    );
  }
}


