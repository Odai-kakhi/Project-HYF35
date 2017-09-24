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

    })
  }

  handleSubmit(event) {
    store.setState({
      recording: false,

    })
    program.ProgramAction(store.state.programText)

    event.preventDefault()


  }

  handleCheckBoxChange() {

    store.setState({
      recording: !store.state.recording,

    })
  }

  handleClearBox() {
    console.log(store.state.programText)
    store.setState({
      programText: ''
    })
  }

  render() {
    return (
      <div>
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
        </div>
        <input type="submit" value="R"
          className='run-button' />
          
      </form>
      <button className='clear-button' onClick={this.handleClearBox}> Clear </button>
      </div>
    );
  }
}


