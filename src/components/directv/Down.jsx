import React, { useState } from 'react'
import down from './img/down.svg'

function Down() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={down}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '288px', left:'95px'}}  alt="" />
        </>
    )
}

export default Down