import React, { useState } from 'react'
import dash from './img/dash.svg'


function Dash() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={dash}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '727px', left:'45px'}} alt="" />
        </>
    )
}

export default Dash