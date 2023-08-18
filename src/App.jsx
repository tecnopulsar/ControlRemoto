import StateContext, { stateControlInit } from './components/directv/Context/StateContext';
import React, { useState } from 'react';
import ControlCanales from './components/directv/logica/controlCanales';
import ControlRemoto from './components/directv/controlRemoto/ControlRemoto'
import Canales from './components/directv/canales/Canales';


export default function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  return (
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      {/* <ControlRemoto /> */}
      {/* <ControlCanales /> */}
      <Canales/>
    </StateContext.Provider>
  );
}