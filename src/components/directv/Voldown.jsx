import React, { useContext, useEffect,useState } from 'react'
import voldown from './img/voldown.svg'
import StateContext from '../../Context/StateContext';


function Voldown() {
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
                src={voldown}
                onClick={() => handleClick('Voldown') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '5px', cursor: 'pointer', position: 'absolute', top: '490px', left: '40px' }} alt="" />
        </>
    )
}

export default Voldown