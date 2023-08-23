import React, { useContext, useEffect, useState } from 'react'
import voldown from './img/volminus.svg'
import StateContext from '../../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Voldown() {
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
                src={voldown}
                onClick={() => handleClick('Voldown')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '0px',
                    cursor: 'pointer', position: 'absolute', top: '187px', left: '160px'
                }} alt="" />
        </>
    )
}

export default Voldown