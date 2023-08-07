import React, { useContext,useEffect, useState } from 'react'
import prev from './img/prev.svg'
import StateContext from '../../Context/StateContext';


function Prev() {
    const { setBtnPress, stateControl, setStateControl } = useContext(StateContext)
    const [isClick, setIsClick] = useState(false)

    const handleClick = (btn) => {
        setIsClick(true);
        setTimeout(() => setIsClick(false), stateControl.config.ledFlashing)
        setBtnPress(true);
        const valBtnPress = btn;
        setStateControl({ ...stateControl, valBtnPress })
    };
    return (
        <>
            <img
                src={prev}
                onClick={() =>  handleClick('Prev') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '513px', left: '129px' }} alt="" />
        </>
    )
}

export default Prev