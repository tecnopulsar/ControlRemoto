
import StateContext, { stateControlInit } from './components/Context/StateContext';
import ControlRemotoDirectv from './components/directv/controlRemoto/ControlRemoto'
import ControlRemotoTVLatino from './components/TVLatino/ControlRemoto/ControlRemoto'
import React, { useState } from 'react';
import { Box } from '@mui/material';


export default function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  return (
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {/* <ControlRemotoDirectv /> */}
        <ControlRemotoTVLatino />
        {/* <Canales /> */}
      </Box>
    </StateContext.Provider>
  );
}