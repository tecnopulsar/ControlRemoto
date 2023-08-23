import { useContext, useEffect, useState } from "react";
import On from "./On";
import Mute from "./Mute";
import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";
import Yellow from "./Yellow";
import Channeldown from "./Channeldown";
import Channelup from "./Channelup";
import Volup from "./Volup";
import Voldown from "./Voldown";
import Menu from "./Menu";
import Info from "./Info";
import Home from "./Home";
import Exit from "./Exit";
import Up from "./Up";
import Down from "./Down";
import Ok from "./Ok";
import Left from "./Left";
import Right from "./Right";
import img_case from './img/case.svg'
import StateContext from "../../Context/StateContext";
import BotonContext, { botonPressedInit } from '../Context/BotonContext'
import { Box } from "@mui/material";

const ControlRemoto = () => {
    const [btnPress, setBtnPress] = useState(botonPressedInit)                     //Flag de boton pulsado
    const { stateControl, setStateControl } = useContext(StateContext)
    const [keyDown, setKeyDown] = useState('')
    

    useEffect(() => {
        const equipo = "TVPanasonic"
      setStateControl({...stateControl, equipo})
    }, [])

    useEffect(() => {
        if (btnPress) {
            let valBtnPress = '';
            let listPress = [];
            let command = [];
            if (isNaN(stateControl.valBtnPress)) {
                let lengthList = stateControl.listPress.length
                switch (lengthList) {
                    case 0: case 1: case 2: case 3: case 4:
                        command = [stateControl.valBtnPress]
                        valBtnPress = '';
                        listPress = [];
                        setStateControl({ ...stateControl, valBtnPress, listPress, command })
                        break;
                }
            } else {
                switch (stateControl.listPress.length) {
                    case 0: case 4:
                        listPress = [stateControl.valBtnPress];
                        valBtnPress = '';
                        setStateControl({ ...stateControl, valBtnPress, listPress })
                        break;
                    case 1: case 2:
                        listPress = stateControl.listPress.concat(stateControl.valBtnPress);
                        valBtnPress = '';
                        setStateControl({ ...stateControl, valBtnPress, listPress })
                        break;
                    case 3:
                        listPress = stateControl.listPress.concat(stateControl.valBtnPress);
                        valBtnPress = '';
                        setStateControl({ ...stateControl, valBtnPress, listPress })
                        break;
                    default: break;
                }
            }
        }
        setBtnPress(false);
    }, [btnPress])

    
    useEffect(() => {
        const idTimer = setTimeout(() => {
            if(stateControl.listPress.length !==0){
                const command = stateControl.listPress
                const listPress = [];
                setStateControl({ ...stateControl, listPress, command })
            }
            }, 2000);
            return () => {
                clearTimeout(idTimer)
        }
    }, [btnPress])

    useEffect(() => {
        let command='';
        switch (keyDown){
            // Numeros 
            case 1:
                command = '1';
                break;
            case 2:
                command = '2';
                break;
            case 3:
                command = '3';
                break;
            case 4:
                command = '4';
                break;
            case 5:
                command = '5';
                break;
            case 6:
                command = '6';
                break;
            case 7:
                command = '7';
                break;
            case 8:
                command = '8';
                break;
            case 9:
                command = '9';
                break;
            case 0:
                command = '0';
                break;
                // Teclado
            case 'o':
                command = 'On';
                break;
            case 'm':
                command = 'Mute';
                break;
            case 'ArrowLeft':
                command = 'Volup';
                break;
            case 'ArrowRight':
                command = 'Voldown';
                break;
            case 'ArrowUp':
                command = 'Channelup';
                break;
            case 'ArrowDown':
                command = 'Channeldown';
                break;
        }
        setStateControl({...stateControl, command})
    }, [keyDown])

    const styleCase = {
        position: 'relative',
        width: '229px',
        height: '499px',
        border: '2xp solid red',
        userSelect: 'none',
        backgroundImage: `url(${img_case})`,
        backgroundRepeat: 'no-repeat',
    }

    return (
        <BotonContext.Provider value={{ btnPress, setBtnPress }}>
            <Box sx={styleCase}>
                <On />
                <Mute />
                <Red /><Green /><Yellow /><Blue />
                <Channelup /><Channeldown /><Volup /><Voldown />
                <Menu /><Info />
                <Left /><Up /><Ok /><Right /><Down />
                <Home /><Exit />
            </Box>
        </BotonContext.Provider>
    );
};

export default ControlRemoto;