import React, { useContext, useEffect,useState } from 'react'
import mute from './img/mute.svg'
 import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Mute() {
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
                src={mute}
                onClick={() =>  handleClick('Mute') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', 
                cursor: 'pointer', position: 'absolute', top: '448px', left: '129px' }} alt="" />
        </>
    )
}

export default Mute