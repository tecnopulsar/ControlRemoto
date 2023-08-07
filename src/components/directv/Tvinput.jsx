import React, { useContext, useEffect,useState } from 'react'
import tvinput from './img/tvinput.svg'
import StateContext from '../../Context/StateContext'


function Tvinput() {
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
                src={tvinput}
                onClick={() =>  handleClick('Tvinput') }
                style={{ backgroundColor: isClick && 'gray', userSelect:'none',borderRadius: '5px', cursor: 'pointer', position: 'absolute', top: '10px', left: '26px' }} alt="" />
        </>
    )
}

export default Tvinput