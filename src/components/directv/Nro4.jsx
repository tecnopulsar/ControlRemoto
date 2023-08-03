import React, { useState } from 'react'
import nro4 from './img/4.svg'

function Nro4() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro4}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '623px', left:'45px'}} alt="" />
        </>
    )
}

export default Nro4