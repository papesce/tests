import {mount} from 'enzyme'
import React from 'react'
import {Provider} from 'react-redux'
import setupGlobals from "../tests/global"
import Colors from "./containers"


jest.mock('./components/ColorList');


describe("<Colors/> Container", () => {
    setupGlobals()
    let wrapper
    const _store = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() =>
        ({ sort: "SORTE_BY_DATE",
          colors: _testColors
        })
        )}
    beforeAll(()=>
        wrapper = mount(
            <Provider store={_store}>
                <Colors />
            </Provider>
        )
    )


    it("renders three colors", () => {
        expect(wrapper
            .find('ColorListMock')
            .props()
            .colors
            .length).tobe(3)
    })




})