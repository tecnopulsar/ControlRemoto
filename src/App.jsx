
import StateContext, { stateControlInit } from './components/Context/StateContext';
import ControlRemotoDirectv from './components/directv/controlRemoto/ControlRemoto'
import ControlRemotoTVLatino from './components/TVLatino/ControlRemoto/ControlRemoto'
import React, { useState } from 'react';
import { Box } from '@mui/material';
import NodeMCU from './components/Interfase/NodeMCU/NodeMCU';


export default function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  const {proveedor} = stateControl
  

  return (
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {/* {proveedor==='directv'&& <ControlRemotoDirectv />} */}
        {/* {proveedor==='tvlatino'&& <ControlRemotoTVLatino />} */}
        {/* <ControlRemotoDirectv /> */}
        <ControlRemotoTVLatino />
        {/* <Canales /> */}
        <NodeMCU/>
      </Box>
    </StateContext.Provider>
  );
}