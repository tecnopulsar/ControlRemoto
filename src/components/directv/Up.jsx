import React, { useContext,useEffect, useState } from 'react'
import up from './img/up.svg'
import StateContext from '../../Context/StateContext';


function Up() {
    const { setBtnPress, stateControl, setStateControl } = useContext(StateContext)
    const [isClick, setIsClick] = useState(false)

    const handleClick = (btn) => {
        setIsClick(true);
        setTimeout(() => setIsClick(false), stateControl.config.ledFlashing)
        setBtnPress(true);
        const valBtnPress = btn;
        setStateControl({ ...stateControl, valBtnPress })
    };
    return (
        <>
            <img
                src={up}
                onClick={() => handleClick('Up') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '165px', left: '97px' }} alt="" />
        </>
    )
}

export default Up