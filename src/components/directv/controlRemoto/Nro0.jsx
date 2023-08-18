import React, { useContext, useEffect, useState } from 'react'
import nro0 from './img/0.svg'
import StateContext from '../Context/StateContext'
import BotonContext from '../Context/BotonContext'

function Nro0() {
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
                src={nro0}
                onClick={() =>  handleClick('0') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', 
                cursor: 'pointer', position: 'absolute', top: '727px', left: '121px' }} alt="" />
        </>
    )
}

export default Nro0