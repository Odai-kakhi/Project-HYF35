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
} )
