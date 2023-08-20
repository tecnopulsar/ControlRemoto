import React, { useContext, useEffect, useState } from 'react'
import list from './img/list.svg'
import StateContext from '../../Context/StateContext';
import BotonContext from '../Context/BotonContext'


function List() {
    const { stateControl, setStateControl } = useContext(StateContext)
    const { btnPress, setBtnPress } = useContext(BotonContext)
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        const idSetTimeout = setTimeout(() => { setIsClick(false) }, 1000)
        return () => {
            clearTimeout(idSetTimeout)
        }
    }, [isClick])


    const handleClick = (btn) => {
        setIsClick(true);
        setBtnPress(!btnPress);
        const valBtnPress = btn;
        setStateControl({ ...stateControl, valBtnPress })
    };
    return (
        <>
            <img
                src={list}
                onClick={() => handleClick('List')}
                style={{
                    border: isClick && '2px solid red', userSelect: 'none', borderRadius: '20px',
                    cursor: 'pointer', position: 'absolute', top: '115px', left: '154px'
                }} alt="" />
        </>
    )
}

export default List