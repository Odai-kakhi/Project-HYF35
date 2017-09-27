import store from '../store'
import * as input from './input'
import * as Text from '../components/TextCodes'
export async function ProgramAction(text) {
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

        await   programStepAsync(program[i] ,newStack ,text)
        
        }
    
    


        
        
}
    

function programStepAsync(program ,newStack ,text) {
    return new Promise(
        function (resolve ,reject) {
            setTimeout(() => {
                 newStack = store.state.stack
                 programStep(program ,newStack ,text)
                 resolve()
            }, 1000)
        }
    )
}
    
    function programStep(program, newStack ,text) {
        
        
        if (!isNaN(Number(program))) {
            program = Number(program)
            
            newStack[3] = newStack[2]
            newStack[2] = newStack[1]
            newStack[1] = newStack[0]
            
            newStack[0] = program
            console.log(newStack)
            store.setState({
                stack: newStack,
                programText : text
            })
        } else {
            if (Text.TextCode[program]) {
                input.performOperation(Text.TextCode[program])
            } else {
                program = program + '  ^__^ error'
                text = program.join('\n')
                store.setState({
                    programText : text
                })
                return
            }
            
            console.log(Text.TextCode[program])
            
            
        }
        
    }

     
    
   
  
  
    

