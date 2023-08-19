import { createContext, useContext, useEffect, useState } from "react";
import "./ControlRemoto.css";
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
import StateContext from "../Context/StateContext";
import BotonContext, {botonPressedInit} from '../Context/BotonContext'

const ControlRemoto = () => {
    const [cmdReady, setCmdReady] = useState(false)                     //Flag de comando listo para transmitirse
    const [displayList, setDisplayList] = useState(false)       //Clear Text info lista de botnes pulsados
    const [btnPress, setBtnPress] = useState(botonPressedInit)                     //Flag de boton pulsado
    const {stateControl, setStateControl} = useContext(StateContext)


    // useEffect(() => {
    //     let valBtnPress = '';
    //     let listPress = [];
    //     let lengthList = stateControl.listPress.length
    //     let command = [];
    //     let idSetTimeout;                      //Para permitir el reset del btnPress
    //     if (isNaN(stateControl.valBtnPress)) {
    //         setDisplayList(true)
    //         let lengthList = stateControl.listPress.length
    //         switch (lengthList) {
    //             case 0: case 1: case 2: case 3: case 4:
    //                 listPress = [stateControl.valBtnPress]             //La lista se limpia por interfaz grafica
    //                 command = [stateControl.valBtnPress]
    //                 valBtnPress = '';
    //                 setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 setCmdReady(true)
    //                 idSetTimeout = setTimeout(() => {
    //                     setDisplayList(false)
    //                     listPress = [];
    //                     setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 }, 2000)
    //                 break;
    //         }

    //     } else {
    //         setDisplayList(true)
    //         if (isNaN(stateControl.listPress[0])) {
    //             lengthList = 0;
    //         }
    //         switch (lengthList) {
    //             case 0: case 4:
    //                 listPress = [stateControl.valBtnPress];
    //                 command = []
    //                 valBtnPress = '';
    //                 setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 idSetTimeout = setTimeout(() => {
    //                     command = listPress;
    //                     listPress = []
    //                     valBtnPress = '';
    //                     setCmdReady(true)
    //                     setDisplayList(false)
    //                     setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 }, 3000)
    //                 break;
    //             case 1: case 2:
    //                 listPress = stateControl.listPress.concat(stateControl.valBtnPress);
    //                 command = []
    //                 valBtnPress = '';
    //                 setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 idSetTimeout = setTimeout(() => {
    //                     command = listPress;
    //                     listPress = []
    //                     valBtnPress = '';
    //                     setCmdReady(true)
    //                     setDisplayList(false)
    //                     setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 }, 3000)
    //                 break;
    //             case 3:
    //                 listPress = stateControl.listPress.concat(stateControl.valBtnPress);
    //                 command = listPress;
    //                 valBtnPress = '';
    //                 setCmdReady(true)
    //                 setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 idSetTimeout = setTimeout(() => {
    //                     command = listPress;
    //                     listPress = [];
    //                     valBtnPress = '';
    //                     setDisplayList(false)
    //                     setStateControl({ ...stateControl, valBtnPress, listPress, command })
    //                 }, 1000)
    //                 break;
    //             default: break;
    //         }
    //     }
    //     return () => clearTimeout(idSetTimeout)
    // }, [btnPress])

    return (
        <BotonContext.Provider value={{ btnPress, setBtnPress }}>
            <div className="control-container">
                <div className="case">
                    {/* {displayList && <h2 className="display">{stateControl.listPress}</h2>} */}
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
                </div>
            </div>
        </BotonContext.Provider>
    );
};

export default ControlRemoto;