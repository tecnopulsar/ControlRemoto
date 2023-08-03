import React, { useState } from 'react'
import nro1 from './img/1.svg'

function Nro1() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro1}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '571px', left:'45px'}} alt="" />
        </>
    )
}

export default Nro1