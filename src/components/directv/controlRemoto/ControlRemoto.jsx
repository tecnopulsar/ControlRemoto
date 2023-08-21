import { useContext, useEffect, useState } from "react";
import Active from "./Active";
import Back from "./Back";
import Blue from "./Blue";
import Channeldown from "./Channeldown";
import Channelup from "./Channelup";
import Down from "./Down";
import Enter from "./Enter";
import Exit from "./Exit";
import Green from "./Green";
import Guide from "./Guide";
import Info from "./Info";
import Left from "./Left";
import List from "./List";
import Logo from "./Logo";
import Menu from "./Menu";
import Mute from "./Mute";
import Nro0 from "./Nro0";
import Nro1 from "./Nro1";
import Nro2 from "./Nro2";
import Nro3 from "./Nro3";
import Nro4 from "./Nro4";
import Nro5 from "./Nro5";
import Nro6 from "./Nro6";
import Nro7 from "./Nro7";
import Nro8 from "./Nro8";
import Nro9 from "./Nro9";
import On from "./On";
import Prev from "./Prev";
import Red from "./Red";
import Right from "./Right";
import Select from "./Select";
import Up from "./Up";
import Voldown from "./Voldown";
import Volup from "./Volup";
import Yellow from "./Yellow";
import Dash from "./dash";
import Off from "./Off";
import Tvinput from "./Tvinput";
import StateContext from "../../Context/StateContext";
import BotonContext, { botonPressedInit } from '../Context/BotonContext'
import img_case from './img/case.svg'
import { Box } from "@mui/material";

const ControlRemoto = () => {
    const [btnPress, setBtnPress] = useState(botonPressedInit)                     //Flag de boton pulsado
    const { stateControl, setStateControl } = useContext(StateContext)


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
            const command = stateControl.listPress
            const listPress = [];
            setStateControl({ ...stateControl, listPress, command })
        }, 2000);
        return () => {
            clearTimeout(idTimer)
        }
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
            < Box sx={styleCase}>
                <Tvinput /><Logo /><On /><Off />
                <Guide /><Active /><List /><Exit />
                <Left /><Up /><Select /><Right /><Down />
                <Back /><Menu /><Info />
                <Red /><Green /><Yellow /><Blue />
                <Volup /><Voldown /><Mute /><Prev /><Channelup /><Channeldown />
                <Nro1 /><Nro2 /><Nro3 />
                <Nro4 /><Nro5 /><Nro6 />
                <Nro7 /><Nro8 /><Nro9 />
                <Dash /><Nro0 /><Enter />

            </Box>
        </BotonContext.Provider>
    );
};

export default ControlRemoto;