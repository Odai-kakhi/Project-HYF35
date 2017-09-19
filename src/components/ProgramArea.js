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
      program: event.target.value.split('\n')
    })
  }
  
  handleSubmit(event) {
    program.ProgramAction(store.state.program)
    
    event.preventDefault()
    
    
  }
  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      <textarea className='text-area' value={store.state.programText} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Run" className='input-button' />
      </form>
    );
  }
  
  
}
