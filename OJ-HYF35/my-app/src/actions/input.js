import store from '../store' 

export function performOperation(operator){
  const { value, displayValue } = store.state
  const newValue = [...value]

  if (operator === 'AC') {
    store.setState({
      displayValue: ''
    })
    return
  }

  if (operator === 'Clear') {
    store.setState({
      value: [],
      displayValue: ''
    })
    return
  }

  if (operator === '±') {
    if (displayValue !== '') {
      store.setState({
        displayValue : String (-1 * Number(displayValue))
      })
    } else if (newValue.length > 0) {
      newValue[newValue.length - 1] = -1 * newValue[newValue.length - 1]
      store.setState({
        value : newValue
      })
      
    } 
    return
    
  }

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
      case 'COS':
        newValue[newValue.length - 1] = Math.cos(newValue[newValue.length - 1])
        break;

      case 'SIN':
        newValue[newValue.length - 1] = Math.sin(newValue[newValue.length - 1])
        break;

      case 'LOG':
        newValue[newValue.length - 1] = Math.log(newValue[newValue.length - 1]) 
        break;
      case 'TAN':
        newValue[newValue.length - 1] = Math.tan(newValue[newValue.length - 1]) 
        break;
      case '%':
        newValue[newValue.length - 1] = newValue[newValue.length - 1] / 100
        break;  
    
      default:
        break;
    }
    
  }
  console.log(newValue)
  store.setState({
    value: newValue,
    displayValue: '',
    dot: false
  })
}
  


export function inputDigit(digit) {
  const { displayValue, dot } = store.state 
  if (digit === '.') {
    if (!dot) {
      store.setState({
        displayValue: displayValue === '' ? '0' + String(digit) : displayValue + digit,
        dot : true
        })
    }
  } else {
    store.setState({
      displayValue : displayValue === '' ? String(digit) : displayValue + digit
      })
  }
  }
