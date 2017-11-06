import C from '../../constants'
import {color} from '../reducers'
import deepFreeze from 'deep-freeze'

describe("color Reducer", () => {
    it("ADD_COLOR success", () => {
        const state = {}
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: "Test Teal",
            color: '#90C3D4',
            timestamp: new Date().toString()

        }
        deepFreeze(state)
        deepFreeze(action)
        const results = color(state, action); 
        expect(results).toEqual({
            id:0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: action.timestamp,
            rating: 0
        }) 
    })

    it("RATE_COLOR success no matching id", () => {
        const state = {id:0}
        const action = {
            type: C.RATE_COLOR,
            id:1}
        const result = color(state, action);
        expect(result).toEqual({
            id:0
        })
    })
    it("RATE_COLOR success matching id", () => {
        const state = {id:0,
            title: "Test Teal",
            color: '#90C3D4',
            rating:3}
        const action = {
            type: C.RATE_COLOR,
             id:0,
              rating:2
        }
        deepFreeze(state)
        deepFreeze(action)
        const result = color(state, action);
        expect(result).toEqual({
            id:0,
            title: "Test Teal",
            color: '#90C3D4',
            rating:2
        })
    })

})