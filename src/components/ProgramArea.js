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
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea className='text-area' id='textArea' value={store.state.programText} onChange={this.handleChange} />
        </label>
        <div className='input-button'>
          <input type="checkbox"
            checked={store.state.recording}
            onChange={this.handleCheckBoxChange}
          />
          <label>
            Record
          </label>
        </div>
        <input type="submit" value="Run"
          className='input-button' />

      </form>
    );
  }


}
