import store from '../store'

export function performOperation(key) {
  const { stack, lastOperator, memory } = store.state
  let newStack = [...stack]
  let Operator = lastOperator
  let newMemory = memory
  switch (key) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':

    
    if (Operator === 'EEX') {
      if (newStack[3][newStack[3].indexOf('+')+1]  === '0') {
        newStack[3] = newStack[3].replace('e+0', 'e+'+key)
      }else if (newStack[3].indexOf('+') === newStack[3].length -2) {
        newStack[3] = newStack[3] + key
      }
      
    } else {
      if (Operator) {
        if (Operator !== 'Enter') {
          for (let i = 0; i <= 2; i++) {
            newStack[i] = newStack[i + 1]
          }
        }
        newStack[3] = 0
        Operator = ''
      }
      newStack[3] = newStack[3] === 0 ? String(key) : newStack[3] + key
  }
      
      
      break;
    case '.':
      if (Operator) {
        newStack[3] = 0
        Operator = ''
      }
      if (String(newStack[3]).indexOf(key) === -1) {
        newStack[3] = newStack[3] === 0 ? '0' + String(key) : newStack[3] + key
      }
      break;

    case 'Enter':
      for (let i = 0; i <= 2; i++) {
        newStack[i] = Number(newStack[i + 1])
      }
      Operator = String(key)
      break;
    case '+':
      newStack[3] = Number(newStack[3]) + newStack[2]
      handelStackOrder()
      break;
    case '-':
      newStack[3] = Number(newStack[2]) - newStack[3]
      handelStackOrder()
      break;
    case 'x':
      newStack[3] = Number(newStack[3]) * newStack[2]
      handelStackOrder()
      break;
    case '÷':
      if (newStack[3] !== 0) {
        newStack[3] = newStack[2] / Number(newStack[3])
        handelStackOrder()
      }
      break;
    case 'COS':

      if (Operator === 'ARC') {
        newStack[3] = radiansToDegrees(Math.acos(Number(newStack[3])))
      } else {
        newStack[3] = Math.cos(degreesToRadians(Number(newStack[3])))
      }

      Operator = String(key)
      break;
    case 'SIN':
      if (Operator === 'ARC') {
        newStack[3] = radiansToDegrees(Math.asin(Number(newStack[3])))
      } else {
        newStack[3] = Math.sin(degreesToRadians(Number(newStack[3])))
      }

      Operator = String(key)
      break;
    case 'TAN':
      if (Operator === 'ARC') {
        newStack[3] = radiansToDegrees(Math.atan(Number(newStack[3])))
      } else {
        newStack[3] = Math.tan(degreesToRadians(Number(newStack[3])))
      }
      Operator = String(key)
      break;

    case 'LOG':
      newStack[3] = Math.log(Number(newStack[3]))
      Operator = String(key)
      break;
    case 'CHS':
      newStack[3] = -1 * Number(Number(newStack[3]))
      Operator = String(key)
      break;
    case 'LN':
      newStack[3] = Math.ln(Number(newStack[3]))
      Operator = String(key)
      break;
    case 'CLX':
      newStack[3] = 0
      Operator = String(key)
      break;
    case 'CLR':
      newStack = [0, 0, 0, 0]
      Operator = ''
      break;
    case 'R↓':
      let i = Number(newStack[3])
      newStack[3] = newStack[2]
      handelStackOrder()
      newStack[0] = i
      break;
    case 'x↔y':
      i = Number(newStack[3])
      newStack[3] = newStack[2]
      newStack[2] = i
      Operator = String(key)

      break;
    case '√x':
      newStack[3] = Math.sqrt(Number(newStack[3]))
      Operator = String(key)
      break;
    case '¹/x':
      newStack[3] = 1 / Number(newStack[3])
      Operator = String(key)
      break;
    case 'xʸ':
      newStack[3] = Math.pow(Number(newStack[3]), newStack[2])
      handelStackOrder()
      break;
    case 'π':
      for (let i = 0; i <= 2; i++) {
        newStack[i] = Number(newStack[i + 1])
      }
      Operator = String(key)
      newStack[3] = Math.PI
      break;
    case 'EEX':
      if (Operator !== 'EEX' && String(newStack[3]).indexOf('e+')=== -1) {
        newStack[3] = newStack[3] + 'e+0'
        Operator = String(key)
      }  
      break;
      case 'STO':
      newMemory = newStack[3]
      Operator = String(key)
       break;
     case 'RCL':
     for (let i = 0; i <= 2; i++) {
       newStack[i] = Number(newStack[i+1])
     }
     newStack[3] = newMemory
     Operator=String(key)
     break;
      
    default:
      // Operator = String(key)
      break;
  }

  console.log(newStack)
  store.setState({
    stack: newStack,
    lastOperator: Operator,
    memory: newMemory
  })

  function handelStackOrder() {
    newStack[2] = newStack[1]
    newStack[1] = newStack[0]
    Operator = String(key)

  }
  function degreesToRadians(degrees) {
    return (degrees * Math.PI / 180)
  }
  function radiansToDegrees(radians) {
    return (radians * 180 / Math.PI)
  }
}

