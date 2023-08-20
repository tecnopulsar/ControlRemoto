import React, { useContext, useEffect, useState } from 'react'
import nro4 from './img/4.svg'
import StateContext from '../../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Nro4() {
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
                src={nro4}
                onClick={() => handleClick('4')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '20px',
                    cursor: 'pointer', position: 'absolute', top: '623px', left: '45px'
                }} alt="" />
        </>
    )
}

export default Nro4