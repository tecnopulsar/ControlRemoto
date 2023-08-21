import React, { useContext, useEffect, useState } from 'react'
import StateContext from '../../Context/StateContext'
import axios from 'axios'
import { Box } from '@mui/material'

const initialSettings =
{
    ip: '192.168.1.15',
    wifi: 'Tel1976',
    password: 'tecnopulsar76',
    url: 'http://192.168.1.15/api/nodemcu'
}

function NodeMCU() {
    const [settings, setSettings] = useState(initialSettings)
    const { url } = settings
    const { stateControl, setStateControl } = useContext(StateContext)

    useEffect(() => {
        (stateControl.command.length !== 0) && axios
            // .get('http://192.168.1.15/')
            .get(`${url}?command=${stateControl.command}`)
            .then(response => {
                const feedback = response.data;
                setStateControl({...stateControl, feedback})
            })
    }, [stateControl.command])


    return (
        <Box>
            <Box>{stateControl.command}</Box>
            <Box>{stateControl.feedback !== 'Comando recibido: ' && stateControl.feedback}</Box>
        </Box>

    )
}

export default NodeMCU