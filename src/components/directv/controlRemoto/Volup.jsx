import React, { useContext, useEffect,useState } from 'react'
import volup from './img/volup.svg'
 import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Volup() {
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
                src={volup}
                onClick={() => handleClick('Volup') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '5px', 
                cursor: 'pointer', position: 'absolute', top: '427px', left: '35px' }} alt="" />
        </>
    )
}

export default Volup