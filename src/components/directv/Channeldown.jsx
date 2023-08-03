import React, { useState } from 'react'
import channeldown from './img/channeldown.svg'

function Channeldown() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={channeldown}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'5px',cursor: 'pointer', position:'absolute', top: '490px', left:'207px'}}  alt="" />
        </>
    )
}

export default Channeldown