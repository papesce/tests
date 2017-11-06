import {shallow } from 'enzyme'
import Star from './star'
import React from 'react'
import setupGlobals from "../../tests/global"

describe("<Star /> UI Component", () => {
    setupGlobals()
    it("renders default star", () => {
        const wrapper = shallow(<Star />)
        expect(
            wrapper.find('div.star').length).toBe(1)
        
    })

    it("renders selected start", () => {
        expect(
            shallow(<Star selected={true}/>).
            find('div.selected.star').length
        ).toBe(1)  
        
    })

    it("Invokes onClick", () => {
        const _click = jest.fn()

        shallow(<Star onClick={_click} />)
        .find('div.star')
        .simulate('click')

        expect(_click).toBeCalled()
    })



}) 