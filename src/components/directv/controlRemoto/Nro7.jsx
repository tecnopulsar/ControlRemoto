import React, { useContext, useEffect, useState } from 'react'
import nro7 from './img/7.svg'
import StateContext from '../../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Nro7() {
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
                src={nro7}
                onClick={() => handleClick('7')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '20px',
                    cursor: 'pointer', position: 'absolute', top: '675px', left: '45px'
                }} alt="" />
        </>
    )
}

export default Nro7