import React, { useState } from 'react'
import nro7 from './img/7.svg'

function Nro7() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro7}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '675px', left:'45px'}} alt="" />
        </>
    )
}

export default Nro7