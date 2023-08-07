import React, { useContext, useEffect,useState } from 'react'
import voldown from './img/voldown.svg'
import StateContext from '../../Context/StateContext';


function Voldown() {
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
                src={voldown}
                onClick={() => handleClick('Voldown') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none', borderRadius: '5px', cursor: 'pointer', position: 'absolute', top: '490px', left: '40px' }} alt="" />
        </>
    )
}

export default Voldown