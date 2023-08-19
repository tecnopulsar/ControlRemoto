import React, { useContext, useEffect,useState } from 'react'
import select from './img/ok.svg'
 import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Select() {
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
                src={select}
                onClick={() => handleClick('Select') }
                style={{ backgroundColor: isClick && 'gray',
                         userSelect:'none', 
                         borderRadius: '20px', 
                         cursor: 'pointer', 
                         position: 'absolute', 
                         top: '318px', 
                         left: '81px' }} alt="" />
        </>
    )
}

export default Select