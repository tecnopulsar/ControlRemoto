import React, { useState } from 'react'
import voldown from './img/voldown.svg'

function Voldown() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={voldown}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'5px',cursor: 'pointer', position:'absolute', top: '490px', left:'41px'}}  alt="" />
        </>
    )
}

export default Voldown