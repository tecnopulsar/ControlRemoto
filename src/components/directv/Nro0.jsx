import React, { useContext, useState } from 'react'
import nro0 from './img/0.svg'
import StateContext from '../../Context/StateContext';

function Nro0() {
    const { stateControl, setStateControl } = useContext(StateContext)

    const [isClick, setIsClick] = useState(false);


    const handleClick = () => {
        const btnPress = '0'
        let listPress = [btnPress];
        if (!isNaN(btnPress)) {
            switch (stateControl.listPress.length) {
                case 1: 
                    if(isNaN(stateControl.listPress[0])) {
                        listPress = [btnPress]
                        break;
                    }               
                case 2: case 3:
                    listPress = stateControl.listPress.concat(btnPress);
                    break;
                default: break;
            }
        }
        setStateControl({ ...stateControl, btnPress, listPress })
        setIsClick(true);
        setTimeout(() => setIsClick(false), 200)
    };

    return (
        <>
            <img
                src={nro0}
                onClick={handleClick}
                style={{ backgroundColor: isClick && 'gray', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '571px', left: '45px' }} alt="" />
        </>
    )
}

export default Nro0