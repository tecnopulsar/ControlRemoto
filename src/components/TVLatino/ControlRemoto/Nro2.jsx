import React, { useContext, useEffect, useState } from 'react'
import nro2 from './img/2.svg'
import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Nro2() {
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
                src={nro2}
                onClick={() => handleClick('2')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '0px',
                    cursor: 'pointer', position: 'absolute', top: '473px', left: '89px'
                }} alt="" />
        </>
    )
}

export default Nro2