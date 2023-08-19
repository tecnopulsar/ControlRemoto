import StateContext, { stateControlInit } from './components/TVLatino/Context/StateContext';
import React, { useState } from 'react';
import ControlRemoto from './components/TVLatino/controlRemoto/ControlRemoto'
// import Canales from './components/directv/canales/Canales';
import { Box } from '@mui/material';


export default function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  return (
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      <Box sx={{display:'flex', flexDirection:'row',padding:0, margin:0}}>
        {/* <Canales /> */}
        <ControlRemoto />
      </Box>
    </StateContext.Provider>
  );
}