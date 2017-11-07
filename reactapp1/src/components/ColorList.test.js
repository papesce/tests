import ColorList from './ColorList'
import React from 'react'
import {mount} from 'enzyme'
//replace Color component with a mock
import setupGlobals from "../../tests/global"

 jest.mock('./Color', () =>
     ({rating, onRate = f=>f}) => 
        <div className="mock-color"> 
             <button className="rate" onClick={() =>
                 onRate(rating)}/>
         </div>
 )

setupGlobals()

describe("<ColorList/> Test Suite", () => {

    it("ColorList should populate mocks")

    describe("Rating Color", () => { 
        let _rate = jest.fn() 
        beforeAll(() => 
            mount(<ColorList colors={_testColors} onRate={_rate}/>)
            .find('button.rate')
            .first()
            .simulate('click')
        )

        it("Invokes onRate Handler", () => {
            expect(_rate).toBeCalled()
        })

        it("rates the correct color", () =>
            expect(_rate).toBeCalledWith(
                "8658c1d0-9eda-4a90-95e1-8001e8eb6036",4) 
        )
    })

})