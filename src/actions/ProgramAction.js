import store from '../store'
import * as input from './input'
import * as Text from '../components/TextCodes'
export function ProgramAction(pro) {
    
    
    const { stack } = store.state
    let newStack = [...stack]
    console.log(pro)
    function wait(ms) {
        var waitDateOne = new Date();
        while ((new Date()) - waitDateOne <= ms) {
            //Nothing
        }
        
    }
    for (let i = 0; i < pro.length; i++) {
        
        if (!isNaN(Number(pro[i]))) {
            pro[i] = Number(pro[i])
            
            newStack[3] = newStack[2]
            newStack[2] = newStack[1]
            newStack[1] = newStack[0]
            
            newStack[0] = pro[i]
            console.log(newStack)
            store.setState({
                stack: newStack
            })
        } else {
            
            input.performOperation(Text.TextCode[pro[i]] || pro[i]) 
            newStack = store.state.stack
            
            
        }
        
        wait(200)
    }

     store.setState({
        stack: newStack
    })
    
   
  }
  
    

