import React, { useState } from 'react'
import channelup from './img/channelup.svg'

function Channelup() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={channelup}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'5px',cursor: 'pointer', position:'absolute', top: '427px', left:'209px'}}  alt="" />
        </>
    )
}

export default Channelup