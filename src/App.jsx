// import StateContext, { stateControlInit } from './components/TVLatino/Context/StateContext';
// import ControlRemoto from './components/TVLatino/controlRemoto/ControlRemoto'
import StateContext, { stateControlInit } from './components/directv/Context/StateContext';
import ControlRemoto from './components/directv/controlRemoto/ControlRemoto'
import React, { useState } from 'react';
import Canales from './components/directv/canales/Canales';
import { Box } from '@mui/material';


export default function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  return (
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {/* <Canales /> */}
        <ControlRemoto />
      </Box>
    </StateContext.Provider>
  );
}