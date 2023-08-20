import React, { useContext, useEffect, useState } from 'react'
import tvinput from './img/tvinput.svg'
import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Tvinput() {
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
                src={tvinput}
                onClick={() => handleClick('Select')}
                style={{
                    border: isClick && '2px solid red',
                    userSelect: 'none',
                    borderRadius: '0px',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '10px',
                    left: '26px'
                }} alt="" />
        </>
    )
}

export default Tvinput