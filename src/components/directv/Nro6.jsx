import React, { useState } from 'react'
import nro6 from './img/6.svg'

function Nro6() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro6}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '623px', left:'197px'}} alt="" />
        </>
    )
}

export default Nro6