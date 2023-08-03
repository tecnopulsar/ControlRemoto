import React, { useState } from 'react'
import yellow from './img/yellow.svg'

function Yellow() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={yellow}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '392px', left:'160px'}}  alt="" />
        </>
    )
}

export default Yellow