import React, { useContext, useState } from 'react'
import blue from './img/blue.svg'
import StateContext from '../../Context/StateContext';

function Blue() {
    const { stateControl, setStateControl } = useContext(StateContext)

    const [isClick, setIsClick] = useState(false);


    const handleClick = () => {
        const btnPress = 'Blue'
        let listPress = [btnPress];
        if (!isNaN(btnPress)) {
            switch (stateControl.listPress.length) {
                case 1:
                    if (isNaN(stateControl.listPress[0])) {
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
                src={blue}
                onClick={handleClick}
                style={{ backgroundColor: isClick && 'gray', borderRadius: '20px', cursor: 'pointer', position: 'absolute', top: '368px', left: '212px' }} alt="" />
        </>
    )
}

export default Blue