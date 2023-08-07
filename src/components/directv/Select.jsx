import React, { useContext, useEffect,useState } from 'react'
import select from './img/select.svg'
import StateContext from '../../Context/StateContext';


function Select() {
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
                src={select}
                onClick={() => handleClick('Select') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '218px', left: '117px' }} alt="" />
        </>
    )
}

export default Select