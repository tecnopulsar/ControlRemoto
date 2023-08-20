import React, { useContext, useState } from 'react'
import StateContext from '../../Context/StateContext'

const initialSettings =
{
    ip: '192.168.1.100',
    wifi: 'Tel1976',
    password: 'tecnopulsar76'
}

function NodeMCU() {
    const [setting, setSetting] = useState(initialSettings)
    const {stateControl} = useContext(StateContext)
    console.log(stateControl.command)
    return (
        <div>NodeMCU</div>
    )
}

export default NodeMCU