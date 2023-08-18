import React, { useContext, useEffect,useState } from 'react'
import channelup from './img/channelup.svg'
 import StateContext from '../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function Channelup() {
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
                src={channelup}
                onClick={() =>  handleClick('Channelup') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '5px', 
                cursor: 'pointer', position: 'absolute', top: '427px', left: '204px' }} alt="" />
        </>
    )
}

export default Channelup