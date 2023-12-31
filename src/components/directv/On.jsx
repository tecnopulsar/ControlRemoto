import React, { useContext, useEffect, useState } from 'react'
import on from './img/on.svg'
import StateContext from '../../Context/StateContext';


function On() {
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
                src={on}
                onClick={() =>  handleClick('On') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '30px', left: '230px' }} alt="" />
        </>
    )
}

export default On