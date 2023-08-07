import React, { useContext,useEffect,useState } from 'react'
import right from './img/right.svg'
import StateContext from '../../Context/StateContext';


function Right() {
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
                src={right}
                onClick={() => handleClick('Right') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '196px', left: '189px' }} alt="" />
        </>
    )
}

export default Right