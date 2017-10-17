import React from 'react'
import store from '../store'
import * as program from '../actions/ProgramAction'
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

  handleChange(event) {
    store.setState({
      programText: event.target.value,
      currentOperation : 0,
      dropDown:false
    })
  }
  handleStep() {
    program.Step(store.state.programText)
  }
  handleSubmit(event) {
    store.setState({
      recording: false,
      dropDown:false

    })
    program.ProgramAction(store.state.programText)

    event.preventDefault()
    console.log(event)

  }

  handleCheckBoxChange() {
    store.setState({
      recording: !store.state.recording,
      dropDown:false

    })
  }

  handleClearBox() {
    console.log(store.state.programText)
    store.setState({
      programText: '',
      dropDown:false
    })
  }
  handleCheckBoxSlow() {
    store.setState({
      slow: !store.state.slow,
      dropDown:false

    })
  }
  changeProgramScreen(screenName) {
    console.log(screenName)
    store.setState({
      programScreen : screenName,
      dropDown:false
    })
  }


  render() {
    let dropDownItems 
    let showSaveButton
    if (store.state.user.Fname !== 'Guest' ) {
      showSaveButton=(<div className='saveServer' onClick={()=>{this.changeProgramScreen('SaveServer')}}>
      save to server
      </div> )
    }   

      if (store.state.dropDown) {
        dropDownItems = (
          <div>
            <div className='SaveScreen' onClick={()=>{this.changeProgramScreen('SaveScreen')}}>
            Save to local storeg
            </div>
            <div className='LoadScreen' onClick={()=>{this.changeProgramScreen('LoadScreen')}}>
            Load from label storeg
            </div>
            <div className='LoadServer' onClick={()=>{this.changeProgramScreen('LoadServer')}}>
            Load from server
          </div>  
          {showSaveButton}
           
          </div>
            )
      }
          
          
    return (
      <div>
        <div className="local-storge">
            <div className='local' onClick={()=> store.setState({dropDown:!store.state.dropDown})}>
              Load & save 
             
            </div>
             {dropDownItems}

          
          
        </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea className='text-area' id='textArea' value={store.state.programText} onChange={this.handleChange} /> 
        </label> 
        <div className='Record-button'>
        
          <input type="checkbox" className='checkbox'
            checked={store.state.recording}
            onChange={this.handleCheckBoxChange}
          />
          <label className='record-text'>
            Record
          </label>
          <div className='slow-button'>
          <input type="checkbox" className='checkbox'
            checked={store.state.slow}
            onChange={this.handleCheckBoxSlow}
          />
          <label className='slow-text'>
            Slow
          </label>    
          </div>  
        </div>
        <button type="submit" value="Run"
          className='run-button'>Run</button>
          
      </form>
      <button className='step-button' onClick={this.handleStep}> Step </button>  
      <button className='clear-button' onClick={this.handleClearBox}> Clear </button>
       
      </div>
    );
  }
}

