import store from '../store' 


export function clearDisplay() {
  const clearLastValue = [...store.state.value]
  const i = clearLastValue.length
  clearLastValue[i-1] = 0
  store.setState({
    value : clearLastValue
  })
}

export function clear(){
  store.setState({
    value : [0]
  })
}
 
export function enterFunction() {
  const { value } = store.state
  const newValue = [...value]
  newValue.push(0)
  console.log(newValue)
  store.setState({
    value: newValue,
    dot: false
    
  })
}
export function performOperation(operator){
  const { value } = store.state
  const newValue = [...value]
  
  if (newValue[newValue.length - 1] === 0) {
    newValue.pop()
  }
  
  if (newValue.length > 1) {
    switch (operator) {
      case '+':
        newValue[newValue.length - 2] = newValue[newValue.length - 2] + newValue[newValue.length - 1]
        break;
      case '*':
        newValue[newValue.length - 2] = newValue[newValue.length - 2] * newValue[newValue.length - 1]
        break;
      case '-':
        newValue[newValue.length - 2] = newValue[newValue.length - 2] - newValue[newValue.length - 1]
        break;
      case '/':
      if(newValue[newValue.length - 1] != 0){
         newValue[newValue.length - 2] = newValue[newValue.length - 2] / newValue[newValue.length - 1]
      } else {
        newValue[newValue.length -2] = "erorr syntax"
      }
        break;
    
      
    }
  newValue.pop()
  }
  console.log(newValue)
  store.setState({
    value : newValue
  })
  }
  
  
  




export function toggleSing(){
const { value } = store.state  
const newValue = [...value]
const i = newValue.length
  newValue[i - 1] = -1 * newValue[i - 1]
store.setState({
  value : newValue
})
}

export function inputDigit(digit) {
  const { value } = store.state  
  const newValue = [...value]
  const i = newValue.length
  newValue[i-1] = String(newValue[i-1])
  newValue[i - 1] = newValue[i - 1] === '0' ? digit : newValue[i - 1] + digit
  newValue[i-1] = Number(newValue[i-1])

  store.setState({
    value : newValue
  })
  console.log(value)
  }

export function inputPercent(){
  const { value } = store.state
  const newValue = [...value]
  const i = newValue.length
  newValue[i-1] = newValue / 100
  store.setState({
    value : newValue
  })
}

export function inputDot(){
    const { value, dot } = store.state  
    if (!dot) {
      const newValue = [...value]
      const i = newValue.length
      newValue[i-1] = newValue[i-1] + '.'
      store.setState({
          value: newValue,
          dot : true
        })
    }
    
}
