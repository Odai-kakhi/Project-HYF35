import store from '../store'

export function performOperation(key) {
  const { stack, lastOperator } = store.state
  let newStack = [...stack]
  let Operator = lastOperator
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
      newStack[3] = Number(newStack[3])
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
        newStack[3] = radiansToDegrees(Math.acos(newStack[3]))
      } else {
        newStack[3] = Math.cos(degreesToRadians(newStack[3]))
      }

      Operator = String(key)
      break;
    case 'SIN':
      if (Operator === 'ARC') {
        newStack[3] = radiansToDegrees(Math.asin(newStack[3]))
      } else {
        newStack[3] = Math.sin(degreesToRadians(newStack[3]))
      }

      Operator = String(key)
      break;
    case 'TAN':
      if (Operator === 'ARC') {
        newStack[3] = radiansToDegrees(Math.atan(newStack[3]))
      } else {
        newStack[3] = Math.tan(degreesToRadians(newStack[3]))
      }
      Operator = String(key)
      break;

    case 'LOG':
      newStack[3] = Math.log(newStack[3])
      Operator = String(key)
      break;
    case 'LN':
      newStack[3] = Math.ln(newStack[3])
      Operator = String(key)
      break;
    case 'CLR':
      newStack = [0, 0, 0, 0]
      Operator = ''
      break;
    case 'R↓':
      let i = newStack[3]
      newStack[3] = newStack[2]
      handelStackOrder()
      newStack[0] = i
      break;
    case 'x↔y':
      i = newStack[3]
      newStack[3] = newStack[2]
      newStack[2] = i
      Operator = String(key)

      break;
    case '√x':
      newStack[3] = Math.sqrt(newStack[3])
      Operator = String(key)
      break;
    case '¹/x':
      newStack[3] = 1 / newStack[3]
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
    default:
      Operator = String(key)
      break;
  }

  console.log(newStack)
  store.setState({
    stack: newStack,
    lastOperator: Operator
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

