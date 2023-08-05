import React, { useContext, useState } from 'react'
import channelup from './img/channelup.svg'
import StateContext from '../../Context/StateContext';

function Channelup() {
    const { stateControl, setStateControl } = useContext(StateContext)

    const [isClick, setIsClick] = useState(false);


    const handleClick = () => {
        const btnPress = 'Channelup'
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
                src={channelup}
                onClick={handleClick}
                style={{ backgroundColor: isClick && 'gray', borderRadius: '5px', cursor: 'pointer', position: 'absolute', top: '427px', left: '204px' }} alt="" />
        </>
    )
}

export default Channelup