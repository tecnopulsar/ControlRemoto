import React, { useContext, useEffect, useState } from 'react'
import nro5 from './img/5.svg'
import StateContext from '../../Context/StateContext';


function Nro5() {
    const { btnPress, setBtnPress, stateControl, setStateControl } = useContext(StateContext)
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
                src={nro5}
                onClick={() => handleClick('5') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '623px', left: '121px' }} alt="" />
        </>
    )
}

export default Nro5