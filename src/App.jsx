import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/Home';
import Profile from './views/Profile';
import MyAccount from './views/MyAccount';
import Logout from './views/Logout';
import ControlRemoto from './components/directv/ControlRemoto';
import './components/directv/ControlRemoto.css'
import StateContext from './Context/StateContext';
import { useContext, useState } from 'react';
// import ControlCanales from './logica/controlCanales';
import StateContext, { stateControlInit } from "../../Context/StateContext";



export default function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  return (
    // <Router>
    //   <Route exact path="/" component={Home} />
    //   <Route path="/profile" component={Profile} />
    //   <Route path="/my-account" component={MyAccount} />
    //   <Route path="/logout" component={Logout} />
    // </Router>
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      <div style={{display:'flex', flexDirection:'row', gap:'100px'}}>
        <ControlRemoto />
       {/* <ControlCanales /> */}
      </div>
    </StateContext.Provider>
  );
}
