import React, { useContext, useEffect, useState } from 'react'
import off from './img/off.svg'
import StateContext from '../../Context/StateContext';


function Off() {
    const { btnPress, setBtnPress, stateControl, setStateControl } = useContext(StateContext)
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        const idSetTimeout = setTimeout(() => { setIsClick(false) }, 1000)
        return () => {
            clearTimeout(idSetTimeout)
        }
    }, [isClick])


    const handleClick = (btn) => {
        setIsClick(true);
        setBtnPress(!btnPress);
        const valBtnPress = btn;
        setStateControl({ ...stateControl, valBtnPress })
    };
    return (
        <>
            <img
                src={off}
                onClick={() => handleClick('Off')}
                style={{ backgroundColor: isClick && 'gray', userSelect: 'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '86px', left: '233px' }} alt="" />
        </>
    )
}

export default Off