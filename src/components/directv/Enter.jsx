import React, { useState } from 'react'
import enter from './img/enter.svg'
import './enter.css'

function Enter() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={enter}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position: 'absolute', top: '727px', left: '197px' }}
                alt="" />
        </>
    )
}

export default Enter