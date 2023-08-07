import React, { useContext, useEffect,useState } from 'react'
import volup from './img/volup.svg'
import StateContext from '../../Context/StateContext';


function Volup() {
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
                src={volup}
                onClick={() => handleClick('Volup') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '5px', cursor: 'pointer', position: 'absolute', top: '427px', left: '35px' }} alt="" />
        </>
    )
}

export default Volup