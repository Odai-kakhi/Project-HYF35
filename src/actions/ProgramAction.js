import store from '../store'
import * as input from './input'
import * as Text from '../components/TextCodes'
export function ProgramAction(text) {
    const { stack } = store.state
    let newStack = [...stack]
    if (text.indexOf("```")!== -1) {
        text = text.substring(text.indexOf("```") + 4)
        text = text.substring(-1,text.indexOf("```")-1)
    }
    
    text = text.replace(/ /g, "")
    let program = []
    program = text.split('\n')

    function wait(ms) {
        var waitDateOne = new Date();
        while ((new Date()) - waitDateOne <= ms) {
          
            
        }
        
    }
    for (let i = 0; i < program.length; i++) {
        
        if (!isNaN(Number(program[i]))) {
            program[i] = Number(program[i])
            
            newStack[3] = newStack[2]
            newStack[2] = newStack[1]
            newStack[1] = newStack[0]
            
            newStack[0] = program[i]
            console.log(newStack)
            store.setState({
                stack: newStack,
                programText : text
            })
        } else {
            if (Text.TextCode[program[i]]) {
                input.performOperation(Text.TextCode[program[i]])
            } else {
                program[i] = program[i] + '  ^__^ error'
                text = program.join('\n')
                store.setState({
                    programText : text
                })
                return
            }
            
            console.log(Text.TextCode[program[i]])
            newStack = store.state.stack
            
            
        }

        wait(0)
    }
    

     
    
   
  }
  
    

