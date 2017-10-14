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
    clearInterval(this.interval);
  }

  changeProgramScreen(screenName) {
    console.log(screenName)
    store.setState({
      programScreen: screenName
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.importFromSQL, 1000);
  }


  HandleDelete(programID) {
  
    var myRequest = new XMLHttpRequest();
    myRequest.open("DELETE", `http://localhost:8888/program/${programID}`, true);
    myRequest.setRequestHeader('Authorization', 'Bearer ' + store.state.user.token);
    myRequest.onload = function () {
      var myArr = JSON.parse(this.responseText);
      console.log(myArr);
    };
    myRequest.send();


  }

  importFromSQL() {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "http://localhost:8888/program", true);
    myRequest.setRequestHeader('Authorization', 'Bearer ' + store.state.user.token);
    myRequest.onload = function () {
      var myArr = JSON.parse(this.responseText);
      console.log(myArr);
      store.setState({
        SQLData: myArr
      })

    };
    myRequest.send();


  }
  deletButton(program) {
    if ( store.state.user.Fname !== 'Guest' && program.ownerUserID === store.state.user.userID) {
      return (
        <div className="delete"
        onClick={() => {
          this.HandleDelete(program.programID)
          }
        }
        >
        Delete
        </div>
  
      )
    }
    return
  }
  programList(my) {
    console.log(store.state.SQLData)
    const listItems = store.state.SQLData.map((program) => {
if (my && program.ownerUserID === store.state.user.userID) {
  return (
    <li className='listItems' key={program.programID}
    >
     {this.deletButton(program)}
     <div onClick={() => {
      
        store.setState({
          programText: program.programText.replace(/newline/g, "\n")
        })
        this.changeProgramScreen('ProgramArea')
      }
      }>
        <div className='LiName'>{program.name}</div>
      </div>

    </li>
  )
} else if(!my && program.ownerUserID !== store.state.user.userID){
  return (
    <li className='listItems' key={program.programID}
    >
     {this.deletButton(program)}
     <div onClick={() => {
      
        store.setState({
          programText: program.programText.replace(/newline/g, "\n")
        })
        this.changeProgramScreen('ProgramArea')
      }
      }>
        <div className='LiName'>{program.name}</div>
      </div>

    </li>)
}

    });
    return (
      <ul className=" program-list">{listItems}</ul>
    );
  }


  render() {
    let my = store.state.myPrograms
    return (
      <div>
        <div className='SaveScreen' onClick={() => { this.changeProgramScreen('ProgramArea') }}>
          Cancel
        </div>
        <div className='my'>
        
          <input type="checkbox" className='checkbox'
            
            onChange={() => {
              store.setState({
                myPrograms: !store.state.myPrograms
              })
            }}
          />
          <label>
            My Programs
          </label>
          </div>
        {this.programList(my)}
      </div>
    );
  }
}








