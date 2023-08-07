import React, { useContext, useEffect,useState } from 'react'
import yellow from './img/yellow.svg'
import StateContext from '../../Context/StateContext';


function Yellow() {
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
                src={yellow}
                onClick={() => handleClick('Yellow') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '392px', left: '160px' }} alt="" />
        </>
    )
}

export default Yellow