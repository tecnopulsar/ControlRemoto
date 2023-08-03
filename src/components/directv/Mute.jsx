import React, { useState } from 'react'
import mute from './img/mute.svg'

function Mute() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={mute}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '448px', left:'129px'}}  alt="" />
        </>
    )
}

export default Mute