import React, { useContext, useEffect, useState } from 'react'
import active from './img/active.svg'
import StateContext from '../../Context/StateContext';

function Active() {
    const { btnPress, setBtnPress, stateControl, setStateControl } = useContext(StateContext)
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        const idSetTimeout = setTimeout(() => { setIsClick(false); }, 1000)
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
                src={active}
                onClick={() => handleClick('Active')}
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', cursor: 'pointer', borderRadius: '20px', position: 'absolute', top: '115px', left: '76px' }} alt="" />
        </>
    )
}

export default Active