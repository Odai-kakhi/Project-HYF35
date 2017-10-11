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

  componentDidMount() {
    this.importFromSQL()       
    
  }

  HandleDelete(program) {
    localStorage.removeItem(program)
    this.changeProgramScreen('LoadScreen')
  }

  importFromSQL() {
    
      var myRequest = new XMLHttpRequest();
      myRequest.open("GET", "http://localhost:8888/program", true);
      myRequest.onload = function(){
        var myArr = JSON.parse(this.responseText); 
        console.log(myArr);
        store.setState({
          SQLData : myArr
        })
       
        
      };
      myRequest.send();
      
  }

  programList() {
    console.log(store.state.SQLData)
    const listItems = store.state.SQLData.map((program) => {
      return (
        <li className='listItems' key={program.name}
        >
          
          <div onClick={() => {
            store.setState({
              programText: program.programText
            })
            this.changeProgramScreen('ProgramArea')
          }
          }>
            <div className= 'LiName'>{program.name}</div>
          </div>
  
        </li>
    )
      
  });
    return (
      <ul className = " program-list">{listItems}</ul>
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








