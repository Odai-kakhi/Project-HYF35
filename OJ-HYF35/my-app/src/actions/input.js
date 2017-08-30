import store from '../store' 


export function clearDisplay(){
  store.setState({
    displayValue : '0'
  })
}

export function clear(){
  store.setState({
    value : []
  })
}
 
export function enterFunction() {
  const { displayValue, value } = store.state
  const newValue = [...value]
  newValue.push(Number(displayValue))
  console.log(newValue)
  store.setState({
    value : newValue,
    displayValue : '0'
  })
}
export function performOperation(nextOperator){
  const {displayValue , operator, value} = store.state
  const nextValue = parseFloat(displayValue)
  const operations = {
      '/' : (prevValue, nextValue) => prevValue / nextValue,
      '*' : (prevValue, nextValue) => prevValue * nextValue,
      '+' : (prevValue, nextValue) => prevValue + nextValue,
      '-' : (prevValue, nextValue) => prevValue - nextValue,
      
      // 'enter' : (nextValue) => value.push(nextValue) 
  }

  if(value == null){
    store.setState({
      value : nextValue
    })
  } else if (operator) {
    const currentValue = value || 0
    const computedValue = operations[operator](currentValue , nextValue)
    store.setState({
      value : computedValue,
      displayValue : String(computedValue)
    })
  }
  
  store.setState({
    watingForOperand : true,
    operator : nextOperator
  })
  
}



export function toggleSing(){
const {displayValue} = store.state
store.setState({
  displayValue : displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue  
})
}

export function inputDigit(digit){
    const {displayValue , watingForOperand} = store.state
    if(watingForOperand){
      store.setState({
        displayValue : String(digit),
        watingForOperand : false
      })      
  } 
    else {

      store.setState({
      displayValue : displayValue === '0' ? String(digit) : displayValue + digit
    })
 
    }
  }

export function inputPercent(){
  const {displayValue} = store.state
  const value = parseFloat(displayValue)
  store.setState({
    displayValue : String (value / 100)
  })
}

export function inputDot(){
    const { displayValue, watingForOperand } = store.state
    if (watingForOperand) {
        store.setState({
            displayValue: '.',
            watingForOperand: false
        })
    }
    else if (displayValue.indexOf('.') === -1) {
        store.setState({
            displayValue: displayValue + '.',
            watingForOperand: false
        })
    }
}
