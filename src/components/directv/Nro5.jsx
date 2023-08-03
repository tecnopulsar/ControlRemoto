import React, { useState } from 'react'
import nro5 from './img/5.svg'

function Nro5() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={nro5}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '623px', left:'121px'}} alt="" />
        </>
    )
}

export default Nro5