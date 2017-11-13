import React from 'react'

const Link = ({active, children, onClick}) => {
    if (active) {
        //if active the it is no clickable
        return <span>{children}</span>
    }
    //if not active then is clickable
    return  (
        <a href="#" onClick={e=> {
            e.preventDefault()
            onClick()
        }}>{children} </a> 
    )
}


export default Link