import React, { useContext, useEffect,useState } from 'react'
import yellow from './img/yellow.svg'
import StateContext from '../../Context/StateContext';


function Yellow() {
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
                src={yellow}
                onClick={() => handleClick('Yellow') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '392px', left: '160px' }} alt="" />
        </>
    )
}

export default Yellow