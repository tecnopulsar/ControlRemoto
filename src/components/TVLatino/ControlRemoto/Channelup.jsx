import React, { useContext, useEffect, useState } from 'react'
import channelup from './img/channelup.svg'
import StateContext from '../../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Channelup() {
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
                src={channelup}
                onClick={() => handleClick('Channelup')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '0px',
                    cursor: 'pointer', position: 'absolute', top: '132px', left: '30px'
                }} alt="" />
        </>
    )
}

export default Channelup