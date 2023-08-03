import React, { useState } from 'react'
import volup from './img/volup.svg'

function Volup() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={volup}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'5px',cursor: 'pointer', position:'absolute', top: '427px', left:'36px'}}  alt="" />
        </>
    )
}

export default Volup