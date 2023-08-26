import React, { useContext, useEffect, useState } from 'react'
import StateContext from '../../Context/StateContext'
import axios from 'axios'

import {PresetsCodes} from './DBCodesPresets'

import { Box } from '@mui/material'


const initialSettingsArranger5000 =
{
    ip: '192.168.1.254',
    url: 'http://192.168.1.254/api/command/',
    secretKey:"e0d48effd5c5e9de"
}

function Arranger5000() {
    const { stateControl, setStateControl } = useContext(StateContext)
    const [settings, setSettings] = useState(initialSettingsArranger5000)
    const { url } = settings
    const { equipo, command } = stateControl
    const [commandPreset, setCommandPreset] = useState([])

    const translateCommand = (cmd) => {
        if (isNaN(cmd)) {
            return PresetsCodes[`${equipo}`][`${cmd}`]
        } else {
            return PresetsCodes[`${equipo}`][`Nro${cmd}`]
        }
    }

    useEffect(() => {
        if (command.length !== 0) {
            if (isNaN(command[0])) {
                setCommandPreset([translateCommand(command[0])])
            } else {
                switch (command.length) {
                    case 1:
                        setCommandPreset([translateCommand(command[0])])
                        break;
                    case 2:
                        setCommandPreset([...commandPreset, translateCommand(command[0]), translateCommand(command[1])])
                        break;
                    case 3:
                        setCommandPreset([...commandPreset, translateCommand(command[0]), translateCommand(command[1]), translateCommand(command[2])])
                        break;
                    case 4:
                        setCommandPreset([...commandPreset, translateCommand(command[0]), translateCommand(command[1]), translateCommand(command[2]), translateCommand(command[3])])
                        break;
                    default: break;
                }
            }
        }
    }, [command])

    // Axios Request
    useEffect(() => {
        let mensaje="";
        if (commandPreset.length !== 0) {
            commandPreset.forEach((cmd) => mensaje += `comando=${cmd}&`)
            console.log(mensaje)
            //     axios
            //         .get(`${url}?${mensaje}`)
            //         .then(response => console.log(response.data))
            // setCommandPreset('')
        }
    }, [commandPreset])


    return (
        <Box>
            <Box>{stateControl.command}</Box>
            <Box>{stateControl.feedback !== 'Comando recibido: ' && stateControl.feedback}</Box>
        </Box>

    )
}

export default Arranger5000