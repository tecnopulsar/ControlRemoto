import React, { useContext, useEffect,useState } from 'react'
import select from './img/select.svg'
import StateContext from '../../Context/StateContext';


function Select() {
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
                src={select}
                onClick={() => handleClick('Select') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '218px', left: '117px' }} alt="" />
        </>
    )
}

export default Select