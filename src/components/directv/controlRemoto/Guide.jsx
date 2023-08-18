import React, { useContext, useEffect, useState } from 'react'
import guide from './img/guide.svg'
 import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Guide() {
    const { stateControl, setStateControl } = useContext(StateContext)
    const { btnPress, setBtnPress } = useContext(BotonContext)
    const [isClick, setIsClick] = useState(false)

    useEffect(()=>{
        const idSetTimeout = setTimeout(()=>{setIsClick(false)},1000)
        return ()=> {
            clearTimeout(idSetTimeout)
        }
    },[isClick])
    

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
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', 
                cursor: 'pointer', position: 'absolute', top: '151px', left: '20px' }}
                alt=""
            />
        </>
    )
}

export default Guide