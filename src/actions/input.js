import store from '../store'
import * as key from '../components/KeyCodes'
export function performOperation(value) {
  store.setState(execute(store.state, value))
}
export function execute(state, value) {
  const {
    stack,
    lastOperator,
    memory,
    programText,
    recording
  } = state
  let newStack = [...stack]
  let Operator = lastOperator
  let newMemory = memory
  let parts = programText
  switch (value) {
    case key.D0:
    case key.D1:
    case key.D2:
    case key.D3:
    case key.D4:
    case key.D5:
    case key.D6:
    case key.D7:
    case key.D8:
    case key.D9:

      if (Operator === key.EEX) {
        if (newStack[0][newStack[0].indexOf('e') + 2] === '0') {
          newStack[0] = newStack[0].replace('+0', '+' + value)
          newStack[0] = newStack[0].replace('-0', '-' + value)
        } else if (newStack[0].indexOf('e') === newStack[0].length - 3) {
          newStack[0] = newStack[0] + value
        }

      } else {
        if (Operator) {
          if (Operator !== key.ENTER) {
            for (let i = 3; i >= 1; i--) {
              newStack[i] = newStack[i - 1]
            }
          }
          newStack[0] = 0
          Operator = ''
        }
        newStack[0] = newStack[0] === 0 ? value : newStack[0] + value
      }


      break;
    case key.DOT:
      if (Operator && Operator !== key.EEX) {
        newStack[0] = 0
        Operator = ''
      }
      if (String(newStack[0]).indexOf(value) === -1) {
        newStack[0] = newStack[0] === 0 ? '0' + String(value) : newStack[0] + value
      }
      break;

    case key.ENTER:
      for (let i = 3; i >= 1; i--) {
        newStack[i] = Number(newStack[i - 1])
      }
      newStack[0] = Number(newStack[0])
      Operator = String(value)
      break;
    case key.ADD:
      newStack[0] = Number(newStack[0]) + newStack[1]
      handelStackOrder()
      break;
    case key.SUB:
      newStack[0] = Number(newStack[1]) - newStack[0]
      handelStackOrder()


      break;
    case key.MUL:
      newStack[0] = Number(newStack[0]) * newStack[1]
      handelStackOrder()
      break;
    case key.DIV:
      if (newStack[0] !== 0) {
        newStack[0] = newStack[1] / Number(newStack[0])
        handelStackOrder()
      }
      break;
    case key.ARC:
      if (Operator === key.ARC) {
        if (recording) {
          parts = parts.substring(-1,parts.indexOf("arc")-1)
        }
        Operator = ''
      } else {
        Operator = String(value)
      }
      break;
    case key.COS:

      if (Operator === key.ARC) {
        newStack[0] = radiansToDegrees(Math.acos(Number(newStack[0])))
      } else {
        newStack[0] = Math.cos(degreesToRadians(Number(newStack[0])))
      }

      Operator = String(value)
      break;
    case key.SIN:
      if (Operator === key.ARC) {
        newStack[0] = radiansToDegrees(Math.asin(Number(newStack[0])))
      } else {
        newStack[0] = Math.sin(degreesToRadians(Number(newStack[0])))
      }

      Operator = String(value)
      break;
    case key.TAN:
      if (Operator === key.ARC) {
        newStack[0] = radiansToDegrees(Math.atan(Number(newStack[0])))
      } else {
        newStack[0] = Math.tan(degreesToRadians(Number(newStack[0])))
      }
      Operator = String(value)
      break;
    case key.EXP:
      newStack[0] = Math.exp(Number(newStack[0]))
      Operator = String(value)
      break;
    case key.LOG:
      newStack[0] = Math.log10(Number(newStack[0]))
      Operator = String(value)
      break;
    case key.LN:
      newStack[0] = Math.log(Number(newStack[0]))
      Operator = String(value)
      break;
    case key.CLX:
      newStack[0] = 0
      break;
    case key.CLR:
      newStack = [0, 0, 0, 0]
      Operator = ''
      break;
    case key.ROLL_DOWN:
      let i = Number(newStack[0])
      newStack[0] = newStack[1]
      handelStackOrder()
      newStack[3] = i
      break;
    case key.SWAP:
      i = Number(newStack[0])
      newStack[0] = newStack[1]
      newStack[1] = i
      Operator = String(value)

      break;
    case key.SQRT:
      newStack[0] = Math.sqrt(Number(newStack[0]))
      Operator = String(value)
      break;
    case key.RECIPROCAL:
      newStack[0] = 1 / Number(newStack[0])
      Operator = String(value)
      break;
    case key.POW:
      newStack[0] = Math.pow(Number(newStack[0]), newStack[1])
      handelStackOrder()
      break;
    case key.PI:
      for (let i = 3; i >= 1; i--) {
        newStack[i] = Number(newStack[i - 1])
      }
      Operator = String(value)
      newStack[0] = Math.PI
      break;
    case key.EEX:
      if (String(newStack[0]).indexOf('e') === -1) {
        newStack[0] = newStack[0] + 'e+0'

      }
      Operator = String(value)
      break;
    case key.CHS:
      if (String(newStack[0]).indexOf('e') !== -1) {
        newStack[0] = String(newStack[0])
        if (newStack[0].indexOf('e+') !== -1) {
          newStack[0] = newStack[0].replace('e+', 'e-')
        } else {
          newStack[0] = newStack[0].replace('e-', 'e+')
        }
      } else {
        newStack[0] = -1 * Number(Number(newStack[0]))

      }

      break;
    case key.STO:
      newStack[0] = Number(newStack[0])
      newMemory = newStack[0]
      Operator = String(value)
      break;
    case key.RCL:
      for (let i = 3; i >= 1; i--) {
        newStack[i] = Number(newStack[i - 1])
      }
      newStack[0] = newMemory
      Operator = String(value)
      break;

    default:
      // Operator = String(key)
      break;
  }
  console.log(Operator)
  console.log(newStack)
  document.activeElement.blur();

  if (recording) {
    if (Operator === 'enter') {
      parts = parts + '\n' + newStack[0]
    } else if (Operator && Operator !== 'eex' ) {

      if (parts.substring(parts.length - 1) === '\n') {
        parts = parts + Operator
      } else {
        parts = parts + '\n' + Operator
      }

    } else
      if (parts.indexOf('\n') !== -1) {
        parts = parts.split('\n')
        console.log(parts)
        if (!isNaN(Number(parts[parts.length - 1]))) {
          parts.pop()
        }
        parts.push(String(newStack[0]))
        parts = parts.join('\n');
      } else {
        parts = String(newStack[0])
      }
  }

  return ({
    stack: newStack,
    lastOperator: Operator,
    memory: newMemory,
    programText: parts
  })

  function handelStackOrder() {
    newStack[1] = newStack[2]
    newStack[2] = newStack[3]
    Operator = String(value)

  }

  function degreesToRadians(degrees) {
    return (degrees * 22 / 1260)
  }

  function radiansToDegrees(radians) {
    return (radians * 1260 / 22)
  }
}
