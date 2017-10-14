import React from 'react'
import store from '../store'
import '../App.css'

export default class saveServer extends React.Component {


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
  handleSave(Name, description, share) {
    description = description + '\n\n```\n' + store.state.programText + '\n```'
    description = description.replace(/\n/g, "newline")
    var myRequest = new XMLHttpRequest();
    myRequest.open("POST", `http://localhost:8888/program/${description}/${Name}/${share}`, true);
    myRequest.setRequestHeader('Authorization', 'Bearer ' + store.state.user.token);
    myRequest.onload = function () {
      var myArr = JSON.parse(this.responseText);
      console.log(myArr);
      

    };
    myRequest.send();
  }

  

  render() {
    let programName = ''
    let programDescription = ''
    let share = false
    return (
      <div>
        <div className='cancel-but' onClick={() => { this.changeProgramScreen('ProgramArea') }}>
          Cancel
        </div>


        <label>

          <input type="text" className='programName' id='textArea' defaultValue='Name'
            onChange={(event) => {
              programName = event.target.value
            }
            } />

          <textarea className='text-area' defaultValue='Description' id='description' onChange={
            (event) => {
              programDescription = event.target.value
            }
          } />
        </label>
        <button type="button" className="save-button"
          onClick={() => { this.handleSave(programName, programDescription, share) }}
        >
          Save
          </button>
          <div className='private'>
        
          <input type="checkbox" className='checkbox'
            
            onChange={() => {
              share = !share
            }}
          />
          <label>
            Share
          </label>
          </div>
      </div>
    );
  }
}



