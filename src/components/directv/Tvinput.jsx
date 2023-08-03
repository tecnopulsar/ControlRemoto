import React, { useState } from 'react'
import tvinput from './img/tvinput.svg'

function Tvinput() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={tvinput}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'5px',cursor: 'pointer', position:'absolute', top: '10px', left:'26px'}} alt="" />
        </>
    )
}

export default Tvinput