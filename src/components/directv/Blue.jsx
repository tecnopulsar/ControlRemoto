import React, { useContext, useEffect,useState } from 'react'
import blue from './img/blue.svg'
import StateContext from '../../Context/StateContext';


function Blue() {
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
                src={blue}
                onClick={() => handleClick('Blue')}
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '368px', left: '212px' }} alt="" />
        </>
    )
}

export default Blue