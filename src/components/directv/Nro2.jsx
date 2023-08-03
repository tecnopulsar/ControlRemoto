import React, { useState } from 'react'
import nro2 from './img/2.svg'

function Nro2() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro2}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '571px', left:'121px'}}  alt="" />
        </>
    )
}

export default Nro2