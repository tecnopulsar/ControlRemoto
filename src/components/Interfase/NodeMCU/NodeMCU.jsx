import React, { useContext, useEffect, useState } from 'react'
import StateContext from '../../Context/StateContext'
import axios from 'axios'
import { IrCodes } from './DBCodesIR'

import { Box } from '@mui/material'


const initialSettingsNodeMCU =
{
    ip: '192.168.1.15',
    wifi: 'Tel1976',
    password: 'tecnopulsar76',
    url: 'http://192.168.1.15/api/nodemcu'  // Cors Arduino server.sendHeader("Access-Control-Allow-Origin", "*");
}

function NodeMCU() {
    const { stateControl, setStateControl } = useContext(StateContext)
    const [settings, setSettings] = useState(initialSettingsNodeMCU)
    const { url } = settings
    const { equipo, command } = stateControl
    const [commandIr, setCommandIr] = useState([])

    const translateCommand = (cmd) => {
        if (isNaN(cmd)) {
            return IrCodes[`${equipo}`][`${cmd}`]
        } else {
            return IrCodes[`${equipo}`][`Nro${cmd}`]
        }
    }

    useEffect(() => {
        if (command.length !== 0) {
            if (isNaN(command[0])) {
                setCommandIr([translateCommand(command[0])])
            } else {
                switch (command.length) {
                    case 1:
                        setCommandIr([translateCommand(command[0])])
                        break;
                    case 2:
                        setCommandIr([...commandIr, translateCommand(command[0]), translateCommand(command[1])])
                        break;
                    case 3:
                        setCommandIr([...commandIr, translateCommand(command[0]), translateCommand(command[1]), translateCommand(command[2])])
                        break;
                    case 4:
                        setCommandIr([...commandIr, translateCommand(command[0]), translateCommand(command[1]), translateCommand(command[2]), translateCommand(command[3])])
                        break;
                    default: break;
                }
            }
        }
    }, [command])

    // Axios Request
    useEffect(() => {
        let mensaje="";
        if (commandIr.length !== 0) {
            commandIr.forEach((cmd) => mensaje += `comando=${cmd}&`)
            console.log(mensaje)
            //     axios
            //         .get(`${url}?${mensaje}`)
            //         .then(response => console.log(response.data))
            // setCommandIr('')
        }
    }, [commandIr])


    return (
        <Box>
            <Box>{stateControl.command}</Box>
            <Box>{stateControl.feedback !== 'Comando recibido: ' && stateControl.feedback}</Box>
        </Box>

    )
}

export default NodeMCU