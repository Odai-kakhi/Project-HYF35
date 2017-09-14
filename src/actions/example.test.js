import { expect } from 'chai'
import { execute } from './input.js'
import initialState from '../initialState'

describe('input', () => {
    it('should add two numbers', () => {
        const state = initialState 
        state.stack = [0, 0, 4, 5]
        const newState = execute(state, '+') 
        expect(newState.stack).to.deep.equal([0,0,0,9])
    })

        it('should subtract two numbers', () => {
        const state = initialState 
        state.stack = [0, 0, 5, 4]
        const newState = execute(state, '-') 
        expect(newState.stack).to.deep.equal([0,0,0,1])
    })

    it('should multiply two numberss', () => {
        const state = initialState 
        state.stack = [0, 0, 5, 4]
        const newState = execute(state, '*') 
        expect(newState.stack).to.deep.equal([0,0,0,20])
    })

    it('should Divide two numbers', () => {
        const state = initialState 
        state.stack = [0, 0, 8, 4]
        const newState = execute(state, '/') 
        expect(newState.stack).to.deep.equal([0,0,0,2])
    })

    it('should clear x', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 4]
        const newState = execute(state, 'CLX') 
        expect(newState.stack).to.deep.equal([0,0,0,0])
    })

    it('should clear all stack', () => {
        const state = initialState 
        state.stack = [2, 1, 3, 4]
        const newState = execute(state, 'CLR') 
        expect(newState.stack).to.deep.equal([0,0,0,0])
    })
    
    it('should roll down', () => {
        const state = initialState 
        state.stack = [1, 2, 3, 4]
        const newState = execute(state, 'R↓') 
        expect(newState.stack).to.deep.equal([4,1,2,3])
    })

    

    it('should change the number sign', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 4]
        const newState = execute(state, 'CHS') 
        expect(newState.stack).to.deep.equal([0, 0, 0, -4])
    })

   
    it('should power x with y', () => {
        const state = initialState 
        state.stack = [0, 0, 4, 2]
        const newState = execute(state, 'xʸ') 
        expect(newState.stack).to.deep.equal([0,0,0,16])
    })

    it('should Divide x on 1', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 2]
        const newState = execute(state, '¹/x') 
        expect(newState.stack).to.deep.equal([0,0,0,0.5])
    })


    it('should sqr x', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 16]
        const newState = execute(state, '√x') 
        expect(newState.stack).to.deep.equal([0,0,0,4])
    })

    it('should give the LOG for x', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 10]
        const newState = execute(state, 'LOG') 
        expect(newState.stack).to.deep.equal([0,0,0,1])
    })

    it('should switch between x and y', () => {
        const state = initialState 
        state.stack = [0, 0, 2, 2]
        const newState = execute(state, 'x↔y') 
        expect(newState.stack).to.deep.equal([0,0,2,2])
    })
    

    it('should give the COS for x', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 60]
        state.lastOperator = ''
        const newState = execute(state, 'COS') 
        if (newState.lastOperator === 'ARC'){
            expect(Math.acos(newState.stack[3])).to.equal(0.5000000000000001)
        }else{
            expect(Math.cos(newState.stack[3])).to.equal(0.8775825618903726)
        }
        
    })

    it('should give the SIN for x', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 30]
        state.lastOperator = ''
        const newState = execute(state, 'SIN') 
        if (newState.lastOperator === 'ARC'){
            expect(Math.asin(newState.stack[3])).to.equal(0.49999999999999994)
        }else{
            expect(Math.sin(newState.stack[3])).to.equal(0.47942553860420295)
        }
    })

    it('should give the TAN for x', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 45]
        state.lastOperator = ''
        const newState = execute(state, 'TAN') 
        if (newState.lastOperator === 'ARC'){
            expect(Math.atan(newState.stack[3])).to.equal(0.9999999999999999)
        }else{
            expect(Math.tan(newState.stack[3])).to.equal(1.5574077246549018)
        }
    })

      

    it('should store in the memory', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 2]
        state.memory = null
        const newState = execute(state, 'STO') 
        expect(newState.memory).to.equal(2);
    })

    it('should return from the memory', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 0]
        state.memory = 2
        const newState = execute(state, 'RCL') 
        expect(newState.stack).to.deep.equal([0, 0, 0, 2])
        
    })

     it('should return the EEX', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 2]
        const newState = execute(state, 'EEX') 
        expect(newState.stack).to.deep.equal([0,0,0,'2e+0'])
    })

    it('should return the LN', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 10]
        const newState = execute(state, 'LN') 
        expect(newState.stack).to.deep.equal([0,0,0,2.302585092994046])
    })

    it('should return the π', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 0]
        const newState = execute(state, 'π') 
        expect(newState.stack).to.deep.equal([0,0,0,3.141592653589793])
    })

    it('should return the eˣ', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 0]
        const newState = execute(state, 'eˣ') 
        expect(newState.stack).to.deep.equal([0,0,0,1])
    })
 
} )
