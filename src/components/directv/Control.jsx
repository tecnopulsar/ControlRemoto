import Active from "./Active";
import Back from "./Back";
import Blue from "./Blue";
import Channeldown from "./Channeldown";
import Channelup from "./Channelup";
import "./Control.css";
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

const Control = () => {
    return (
        <div className="control-dtv">
            <div className="case">
                <Tvinput/><Logo/><On/>
                <Guide/><Active/><List/><Exit/>
                <Left/><Up/><Select/><Right/><Down/>
                <Back/><Menu/><Info/>
                <Red/><Green/><Yellow/><Blue/>
                <Volup/><Voldown/><Mute/><Prev/><Channelup/><Channeldown/>
                <Nro1 /><Nro2 /><Nro3 />
                <Nro4 /><Nro5 /><Nro6 />
                <Nro7 /><Nro8 /><Nro9 />
                <Dash /><Nro0 /><Enter />
            </div>
        </div>
    );
};

export default Control;