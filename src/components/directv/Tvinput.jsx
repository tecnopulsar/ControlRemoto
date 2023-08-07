import React, { useContext, useEffect,useState } from 'react'
import tvinput from './img/tvinput.svg'
import StateContext from '../../Context/StateContext'


function Tvinput() {
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
                src={tvinput}
                onClick={() =>  handleClick('Tvinput') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none',borderRadius: '5px', cursor: 'pointer', position: 'absolute', top: '10px', left: '26px' }} alt="" />
        </>
    )
}

export default Tvinput