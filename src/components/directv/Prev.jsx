import React, { useState } from 'react'
import prev from './img/prev.svg'

function Prev() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={prev}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '513px', left:'129px'}}  alt="" />
        </>
    )
}

export default Prev