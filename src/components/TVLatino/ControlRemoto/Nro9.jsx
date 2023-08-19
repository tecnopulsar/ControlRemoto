import React, { useContext, useEffect, useState } from 'react'
import nro9 from './img/9.svg'
 import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Nro9() {
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
                src={nro9}
                onClick={() => handleClick('9') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '0px', 
                cursor: 'pointer', position: 'absolute', top: '565px', left: '147px' }} alt="" />
        </>
    )
}

export default Nro9