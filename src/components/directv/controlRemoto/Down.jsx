import React, { useContext, useEffect, useState } from 'react'
import down from './img/down.svg'
import StateContext from '../../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Down() {
    const { stateControl, setStateControl } = useContext(StateContext)
    const { btnPress, setBtnPress } = useContext(BotonContext)
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
                src={down}
                onClick={() => handleClick('Down')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '20px',
                    cursor: 'pointer', position: 'absolute', top: '288px', left: '95px'
                }} alt="" />
        </>
    )
}

export default Down