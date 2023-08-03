import React, { useState } from 'react'
import menu from './img/menu.svg'

function Menu() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
        setTimeout(()=>setIsClick(false),200)
    };

    return (
        <>
            <img
                src={menu}
                onClick={handleClick}
                style={{backgroundColor: isClick && 'gray', borderRadius:'20px',cursor: 'pointer', position:'absolute', top: '343px', left:'114px'}}  alt="" />
        </>
    )
}

export default Menu