import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
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
import Nro1 from "./Nro1";
import Nro2 from "./Nro2";
import Nro3 from "./Nro3";
import Nro4 from "./Nro4";
import Nro5 from "./Nro5";
import Nro6 from "./Nro6";
import Nro7 from "./Nro7";
import Nro8 from "./Nro8";
import Nro9 from "./Nro9";
import Nro0 from "./Nro0";
import Dash from "./dash";
import Del from "./Del";
import img_case from './img/case.svg'
import StateContext from "../../Context/StateContext";
import BotonContext, { botonPressedInit } from '../Context/BotonContext'
import { Box } from "@mui/material";

const ControlRemoto = () => {
    const [btnPress, setBtnPress] = useState(botonPressedInit)                     //Flag de boton pulsado
    const { stateControl, setStateControl } = useContext(StateContext)


    useEffect(() => {
        let valBtnPress = '';
        let listPress = [];
        let lengthList = stateControl.listPress.length
        let command = [];
        let feedback = '';
        let idSetTimeout;                      //Para permitir el reset del btnPress
        if (isNaN(stateControl.valBtnPress)) {
            let lengthList = stateControl.listPress.length
            switch (lengthList) {
                case 0: case 1: case 2: case 3: case 4:
                    listPress = [stateControl.valBtnPress]             //La lista se limpia por interfaz grafica
                    command = [stateControl.valBtnPress]
                    valBtnPress = '';
                    feedback = '';
                    setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    idSetTimeout = setTimeout(() => {
                        listPress = [];
                        setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    }, 10000)
                    break;
            }
        } else {
            if (isNaN(stateControl.listPress[0])) {
                lengthList = 0;
            }
            switch (lengthList) {
                case 0: case 4:
                    listPress = [stateControl.valBtnPress];
                    command = []
                    valBtnPress = '';
                    feedback = '';
                    setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    idSetTimeout = setTimeout(() => {
                        command = listPress;
                        listPress = []
                        valBtnPress = ''
                        feedback = '';
                        setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    }, 3000)
                    break;
                case 1: case 2:
                    listPress = stateControl.listPress.concat(stateControl.valBtnPress);
                    command = []
                    valBtnPress = '';
                    feedback = '';
                    setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    idSetTimeout = setTimeout(() => {
                        command = listPress;
                        listPress = []
                        valBtnPress = '';
                        feedback = '';
                        setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    }, 3000)
                    break;
                case 3:
                    listPress = stateControl.listPress.concat(stateControl.valBtnPress);
                    command = listPress;
                    valBtnPress = '';
                    feedback = '';
                    setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    idSetTimeout = setTimeout(() => {
                        command = listPress;
                        listPress = [];
                        valBtnPress = '';
                        feedback = '';
                        setStateControl({ ...stateControl, valBtnPress, listPress, command, feedback })
                    }, 1000)
                    break;
                default: break;
            }
        }
        return () => clearTimeout(idSetTimeout)
    }, [btnPress])

    const styleCase = {
        position: 'relative',
        width: '298px',
        height: '800px',
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
                <Nro1 /><Nro2 /><Nro3 />
                <Nro4 /><Nro5 /><Nro6 />
                <Nro7 /><Nro8 /><Nro9 />
                <Dash /><Nro0 /><Del /><Logo />
            </Box>
        </BotonContext.Provider>
    );
};

export default ControlRemoto;