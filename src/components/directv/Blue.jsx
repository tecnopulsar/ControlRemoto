import React, { useState } from 'react'
import blue from './img/blue.svg'

function Blue() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={blue}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '368px', left:'212px'}}  alt="" />
        </>
    )
}

export default Blue