import store from '../store'
import * as input from './input'
import * as Text from '../components/TextCodes'
export function Step(text) {
    if (text === '') { return }
    const { stack } = store.state
    let newStack = [...stack]
    let j = store.state.currentOperation
    text = trimText(text)
    let program = []
    program = text.split('\n')
    if (j === program.length) {
      j = 0
    }
    if (text.indexOf('error')!== -1) {
        return
    }
    programStepAsync(newStack, text, j)
    store.setState({
        currentOperation : j
    })
    
}
export async function ProgramAction(text) {
    console.log(text)
    if (text === '') { return }
    const { stack } = store.state
    let newStack = [...stack]
    let j = store.state.currentOperation
    text = trimText(text)
    let program = []
    program = text.split('\n')

    for (let i = j; i < program.length; i++) {
        text = trimText(store.state.programText)
        console.log(text)
        if (text.indexOf('error') !== -1) {
            console.log("error")
            return   
        }
        await programStepAsync(newStack, text, i)
    }
    // Or
    // program.reduce((prev, index) => {
    //     return prev.then(() => programStepAsync(index, newStack, text))
    // }, Promise.resolve())
    store.setState({
        currentOperation: 0,
        programText :trimText(text)
    })
    

}

function programStepAsync(newStack, text, i) {
    let delay = 0
    if (store.state.slow) {
        delay = 700
    }
    return new Promise(
        function (resolve, reject) {
            setTimeout(() => {
                newStack = store.state.stack
                programStep(newStack, text, i)
                resolve()
            }, delay)
        }
    )
}

function programStep(newStack, text, i) {
    var tempProgram = text.split('\n')
    

    if (!isNaN(Number(tempProgram[i]))) {
        tempProgram[i] = Number(tempProgram[i])

        newStack[3] = newStack[2]
        newStack[2] = newStack[1]
        newStack[1] = newStack[0]

        newStack[0] = tempProgram[i]
        console.log(newStack)
        
        store.setState({
            stack: newStack,
            programText: text
        })
    } else {
        if (Text.TextCode[tempProgram[i]]) {
            input.performOperation(Text.TextCode[tempProgram[i]])
        } else {
            tempProgram[i] =tempProgram[i] +  '  ^__^ error'
            console.log(tempProgram[i])
            text = tempProgram.join('\n')
            store.setState({
                programText: text
            })
            console.log(text)
            return
        }
    }
    tempProgram[i] = '>> ' + tempProgram[i]
    text = tempProgram.join('\n')
    store.setState({
        programText: text,
        currentOperation: store.state.currentOperation + 1
    })
}

function trimText(text) {
    if (text.indexOf("```") !== -1) {
        text = text.substring(text.indexOf("```") + 4)
        text = text.substring(-1, text.indexOf("```") - 1)
    }

    text = text.replace(/ |>>/g, "")
    return text
}
