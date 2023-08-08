import { createContext, useContext, useEffect, useState } from "react";
import Active from "./Active";
import Back from "./Back";
import Blue from "./Blue";
import Channeldown from "./Channeldown";
import Channelup from "./Channelup";
import "./ControlRemoto.css";
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
import Tvinput from "./Tvinput";
import Up from "./Up";
import Voldown from "./Voldown";
import Volup from "./Volup";
import Yellow from "./Yellow";
import Dash from "./dash";
import Off from "./Off";
import StateContext, { stateControlInit } from "../../Context/StateContext";

const ControlRemoto = () => {
    const [cmdReady, setCmdReady] = useState(false)                     //Flag de comando listo para transmitirse
    const [displayList, setDisplayList] = useState(false)       //Clear Text info lista de botnes pulsados
    const [btnPress, setBtnPress] = useState(false)                     //Flag de boton pulsado
    const [stateControl, setStateControl] = useState(stateControlInit)

    useEffect(() => {
        let valBtnPress = '';
        let listPress = [];
        let lengthList = stateControl.listPress.length
        let command = [];
        let idSetTimeout;                      //Para permitir el reset del btnPress
        if (isNaN(stateControl.valBtnPress)) {
            setDisplayList(true)
            let lengthList = stateControl.listPress.length
            switch (lengthList) {
                case 0: case 1: case 2: case 3: case 4:
                    listPress = [stateControl.valBtnPress]             //La lista se limpia por interfaz grafica
                    command = [stateControl.valBtnPress]
                    valBtnPress = '';
                    setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    setCmdReady(true)
                    idSetTimeout = setTimeout(() => {
                        setDisplayList(false)
                        listPress = [];
                        setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    }, 2000)
                    break;
            }

        } else {
            setDisplayList(true)
            if (isNaN(stateControl.listPress[0])) {
                lengthList = 0;
            }
            switch (lengthList) {
                case 0: case 4:
                    listPress = [stateControl.valBtnPress];
                    command = []
                    valBtnPress = '';
                    setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    idSetTimeout = setTimeout(() => {
                        command = listPress;
                        listPress = []
                        valBtnPress = '';
                        setCmdReady(true)
                        setDisplayList(false)
                        setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    }, 3000)
                    break;
                case 1: case 2:
                    listPress = stateControl.listPress.concat(stateControl.valBtnPress);
                    command = []
                    valBtnPress = '';
                    setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    idSetTimeout = setTimeout(() => {
                        command = listPress;
                        listPress = []
                        valBtnPress = '';
                        setCmdReady(true)
                        setDisplayList(false)
                        setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    }, 3000)
                    break;
                case 3:
                    listPress = stateControl.listPress.concat(stateControl.valBtnPress);
                    command = listPress;
                    valBtnPress = '';
                    setCmdReady(true)
                    setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    idSetTimeout = setTimeout(() => {
                        command = listPress;
                        listPress = [];
                        valBtnPress = '';
                        setDisplayList(false)
                        setStateControl({ ...stateControl, valBtnPress, listPress, command })
                    }, 1000)
                    break;
                default: break;
            }
        }
        return () => clearTimeout(idSetTimeout)
    }, [btnPress])

    return (
        <StateContext.Provider value={{ btnPress, setBtnPress, stateControl, setStateControl }}>
            <div className="control-dtv">
                <div className="case">
                    {displayList && <h2 className="display">{stateControl.listPress}</h2>}
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
                </div>
            </div>
        </StateContext.Provider>
    );
};

export default ControlRemoto;