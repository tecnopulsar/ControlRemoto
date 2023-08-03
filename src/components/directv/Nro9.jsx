import React, { useState } from 'react'
import nro9 from './img/9.svg'

function Nro9() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(() => setIsClick(false), 200)
    };

    return (
        <>
            <img
                src={nro9}
                onClick={handleClick}
                style={{ backgroundColor: isClick && 'gray', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '675px', left: '197px' }} alt="" />
        </>
    )
}

export default Nro9