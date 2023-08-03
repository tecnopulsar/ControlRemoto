import React, { useState } from 'react'
import nro3 from './img/3.svg'

function Nro3() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro3}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '571px', left:'197px'}} alt="" />
        </>
    )
}

export default Nro3