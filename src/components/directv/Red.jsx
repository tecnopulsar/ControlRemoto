import React, { useContext, useEffect,useState } from 'react'
import red from './img/red.svg'
import StateContext from '../../Context/StateContext';


function Red() {
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
                src={red}
                onClick={() =>  handleClick('Red') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '368px', left: '52px' }} alt="" />
        </>
    )
}

export default Red