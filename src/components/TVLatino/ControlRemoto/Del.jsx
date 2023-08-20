import React, { useContext, useEffect, useState } from 'react'
import guide from './img/del.svg'
import StateContext from '../../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Guide() {
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
                src={guide}
                onClick={() => handleClick('Guide')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '0px',
                    cursor: 'pointer', position: 'absolute', top: '615px', left: '147px'
                }}
                alt=""
            />
        </>
    )
}

export default Guide