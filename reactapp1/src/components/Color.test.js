import { shallow } from 'enzyme'
import Color from './Color'
import React from 'react'
import setupGlobals from "../../tests/global"

describe("<Color /> UI Component", () => {
    setupGlobals()
    it("Renders correct properties", () => {
        let output = shallow(
            <Color title="Test Color"
                color="#F0F0F0"
                rating={3}
                timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)"
            />
        ).html()

        expect(output).toMatchSnapshot()
    })

})
