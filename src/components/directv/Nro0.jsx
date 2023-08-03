import React, { useState } from 'react'
import nro0 from './img/0.svg'

function Nro0() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro0}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '727px', left:'121px'}}  alt="" />
        </>
    )
}

export default Nro0