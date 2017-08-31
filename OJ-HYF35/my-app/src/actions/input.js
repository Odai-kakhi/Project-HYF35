import store from '../store' 


export function clearDisplay() {

  store.setState({
    displayValue : ''
  })
}

export function clear(){
  store.setState({
    value : []
  })
}
 
export function enterFunction() {
  const { value, displayValue } = store.state
  const newValue = [...value]
  newValue.push(Number(displayValue))
  console.log(newValue)
  store.setState({
    value: newValue,
    dot: false,
    displayValue : ''
    
  })
}
export function performOperation(operator){
  const { value, displayValue } = store.state
  const newValue = [...value]
  if (displayValue !== '') {
    newValue.push(Number(displayValue))
  }
  if (newValue.length > 1) {
    switch (operator) {
      case '+':
        newValue[newValue.length - 2] = newValue[newValue.length - 2] + newValue[newValue.length - 1]
        newValue.pop()
        break;
      case '*':
        newValue[newValue.length - 2] = newValue[newValue.length - 2] * newValue[newValue.length - 1]
        newValue.pop()
        break;
      case '-':
        newValue[newValue.length - 2] = newValue[newValue.length - 2] - newValue[newValue.length - 1]
        newValue.pop()
        break;
      case '/':
      if(newValue[newValue.length - 1] !== 0){
        newValue[newValue.length - 2] = newValue[newValue.length - 2] / newValue[newValue.length - 1]
        newValue.pop()
      } else {
        newValue[newValue.length -2] = "syntax erorr"
      }
        break; 
      default:
        break;
        
    }
    
  
  }
  if (newValue.length >= 1) {
    switch (operator) {
      case 'cos':
        newValue[newValue.length - 1] = Math.cos(newValue[newValue.length - 1])
        break;

      case 'sin':
        newValue[newValue.length - 1] = Math.sin(newValue[newValue.length - 1])
        break;

      case 'log':
        newValue[newValue.length - 1] = Math.log(newValue[newValue.length - 1]) 
        break;
      case 'tan':
        newValue[newValue.length - 1] = Math.tan(newValue[newValue.length - 1]) 
        break;
    
      default:
        break;
    }
    
  }
  console.log(newValue)
  store.setState({
    value: newValue,
    displayValue: ''
  })
}
  
export function toggleSing(){
const { displayValue } = store.state  
store.setState({
  displayValue : String (-1 * Number(displayValue))
})
}

export function inputDigit(digit) {
  const { displayValue } = store.state 
  store.setState({
    displayValue : displayValue === '' ? String(digit) : displayValue + digit
    })
  }

export function inputPercent(){
  const { displayValue } = store.state
  store.setState({
    displayValue : String (Number(displayValue) / 100)
  })
}

export function inputDot(){
    const { displayValue, dot } = store.state  
    if (!dot) {
      store.setState({
        displayValue: displayValue + '.',
          dot : true
        })
    }
    
}
