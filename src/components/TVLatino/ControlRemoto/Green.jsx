import React, { useContext, useEffect,useState } from 'react'
import green from './img/green.svg'
 import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Green() {
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
                src={green}
                onClick={() =>  handleClick('Green') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '0px', 
                cursor: 'pointer', position: 'absolute', top: '90px', left: '73px' }} alt="" />
        </>
    )
}

export default Green