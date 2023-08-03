import React, { useState } from 'react'
import nro8 from './img/8.svg'

function Nro8() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro8}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '675px', left:'121px'}} alt="" />
        </>
    )
}

export default Nro8