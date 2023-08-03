import React from 'react'
import logo from './img/logo.svg'

function Logo() {
    return (
        <>
            <img
                src={logo}
                style={{position:'absolute', top: '30px', left:'116px'}} alt="" />
        </>
    )
}

export default Logo