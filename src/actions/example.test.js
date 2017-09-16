import { expect } from 'chai'
import { execute } from './input.js'
import initialState from '../initialState'
import keyboardCode from '../components/KeyboardCode.js'
import * as key from '../components/KeyCodes'


describe('input', () => {
    it('should add two numbers', () => {
        const state = initialState 
        state.stack = [5, 4, 0, 0]
        const newState = execute(state, 'add') 
        expect(newState.stack).to.deep.equal([9,0,0,0])
    })

        it('should subtract two numbers', () => {
        const state = initialState 
        state.stack = [4, 5, 0, 0]
        const newState = execute(state, 'sub') 
        expect(newState.stack).to.deep.equal([1,0,0,0])
    })

    it('should multiply two numberss', () => {
        const state = initialState 
        state.stack = [5, 4, 0, 0]
        const newState = execute(state, 'mul') 
        expect(newState.stack).to.deep.equal([20,0,0,0])
    })

    it('should Divide two numbers', () => {
        const state = initialState 
        state.stack = [4, 8, 0, 0]
        const newState = execute(state, 'div') 
        expect(newState.stack).to.deep.equal([2,0,0,0])
    })

    it('should clear x', () => {
        const state = initialState 
        state.stack = [4, 0, 0, 0]
        const newState = execute(state, 'clx') 
        expect(newState.stack).to.deep.equal([0,0,0,0])
    })

    it('should clear all stack', () => {
        const state = initialState 
        state.stack = [2, 1, 3, 4]
        const newState = execute(state, 'clr') 
        expect(newState.stack).to.deep.equal([0,0,0,0])
    })
    
    it('should roll down', () => {
        const state = initialState 
        state.stack = [1, 2, 3, 4]
        const newState = execute(state, 'rollDown') 
        expect(newState.stack).to.deep.equal([2,3,4,1])
    })

    

    it('should change the number sign', () => {
        const state = initialState 
        state.stack = [4, 0, 0, 0]
        const newState = execute(state, 'chs') 
        expect(newState.stack).to.deep.equal([-4, 0, 0, 0])
    })

   
    it('should power x with y', () => {
        const state = initialState 
        state.stack = [2, 4, 0, 0]
        const newState = execute(state, 'pow') 
        expect(newState.stack).to.deep.equal([16,0,0,0])
    })

    it('should Divide x on 1', () => {
        const state = initialState 
        state.stack = [2, 0, 0, 0]
        const newState = execute(state, 'reciprocal') 
        expect(newState.stack).to.deep.equal([0.5,0,0,0])
    })


    it('should sqr x', () => {
        const state = initialState 
        state.stack = [16, 0, 0, 0]
        const newState = execute(state, 'sqrt') 
        expect(newState.stack).to.deep.equal([4,0,0,0])
    })

    it('should give the LOG for x', () => {
        const state = initialState 
        state.stack = [10, 0, 0, 0]
        const newState = execute(state, 'log') 
        expect(newState.stack).to.deep.equal([1,0,0,0])
    })

    it('should switch between x and y', () => {
        const state = initialState 
        state.stack = [2, 4, 0, 0]
        const newState = execute(state, 'swap') 
        expect(newState.stack).to.deep.equal([4,2,0,0])
    })
    

    it('should give the COS for x', () => {
        const state = initialState 
        state.stack = [60, 0, 0, 0]
        state.lastOperator = ''
        const newState = execute(state, 'cos') 
        if (newState.lastOperator === 'arc'){
            expect(Math.acos(newState.stack[0])).to.equal(0.5000000000000001)
        }else{
            expect(Math.cos(newState.stack[0])).to.equal(0.8775825618903726)
        }
        
    })

    it('should give the SIN for x', () => {
        const state = initialState 
        state.stack = [30, 0, 0, 0]
        state.lastOperator = ''
        const newState = execute(state, 'sin') 
        if (newState.lastOperator === 'arc'){
            expect(Math.asin(newState.stack[0])).to.equal(0.49999999999999994)
        }else{
            expect(Math.sin(newState.stack[0])).to.equal(0.47942553860420295)
        }
    })

    it('should give the TAN for x', () => {
        const state = initialState 
        state.stack = [45, 0, 0, 0]
        state.lastOperator = ''
        const newState = execute(state, 'tan') 
        if (newState.lastOperator === 'arc'){
            expect(Math.atan(newState.stack[0])).to.equal(0.9999999999999999)
        }else{
            expect(Math.tan(newState.stack[0])).to.equal(1.5574077246549018)
        }
    })

      

    it('should store in the memory', () => {
        const state = initialState 
        state.stack = [2, 0, 0, 0]
        state.memory = null
        const newState = execute(state, 'sto') 
        expect(newState.memory).to.equal(2);
    })

    it('should return from the memory', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 0]
        state.memory = 2
        const newState = execute(state, 'rcl') 
        expect(newState.stack).to.deep.equal([2, 0, 0, 0])
        
    })

     it('should return the EEX', () => {
        const state = initialState 
        state.stack = [2, 0, 0, 0]
        const newState = execute(state, 'eex') 
        expect(newState.stack).to.deep.equal(['2e+0',0,0,0])
    })

    it('should return the LN', () => {
        const state = initialState 
        state.stack = [10, 0, 0, 0]
        const newState = execute(state, 'ln') 
        expect(newState.stack).to.deep.equal([2.302585092994046,0,0,0])
    })

    it('should return the π', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 0]
        const newState = execute(state, 'pi') 
        expect(newState.stack).to.deep.equal([3.141592653589793,0,0,0])
    })

    it('should return the eˣ', () => {
        const state = initialState 
        state.stack = [0, 0, 0, 0]
        const newState = execute(state, 'exp') 
        expect(newState.stack).to.deep.equal([1,0,0,0])
    })
 
} )
