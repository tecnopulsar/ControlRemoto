
import StateContext, { stateControlInit } from './components/Context/StateContext';
// import ControlRemotoDirectv from './components/directv/controlRemoto/ControlRemoto'
import ControlRemotoTVLatino from './components/TVLatino/ControlRemoto/ControlRemoto'
import ControlRemotoUniversalMini from './components/universalMini/ControlRemoto/ControlRemoto'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import NodeMCU from './components/Interfase/NodeMCU/NodeMCU';
import Canales from './components/canalesTV/Canales';
import Arranger5000 from './components/Interfase/Arranger5000_Liberty/Arranger5000';


export default function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  const { proveedor } = stateControl

  // Almacenaje Local
  const saveDataToLocalStorage = () => {
    try {
      localStorage.setItem('stateControl', JSON.stringify(stateControl))  
    } catch (error) {
      if (error instanceof DOMException && error.code === 22) {
        // Error de cuota excedida
        console.error("Error: Quota exceeded!"); 
      } else if (error instanceof DOMException && error.code === 18) {
        // Acceso denegado, probablemente debido a una configuración del navegador
        console.error("Error: Access to localStorage is denied!");
      } else {
        // Otros errores
        console.error("An unknown error occurred: ", error);
      }
    }
  }
  const loadDataFromLocalStorage = () => {
        const loadStateControl = localStorage.getItem('stateControl')
        ? JSON.parse(localStorage.getItem('stateControl'))
        :stateControlInit
  }
  useEffect(() => {
    loadDataFromLocalStorage()
  }, [])
  useEffect(() => {
    saveDataToLocalStorage()
  }, [stateControl])
  // Fin Almacenaje Local
  
  return (
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {/* {proveedor==='directv'&& <ControlRemotoDirectv />} */}
        {/* {proveedor==='tvlatino'&& <ControlRemotoTVLatino />} */}
        {/* <ControlRemotoDirectv /> */}
        <ControlRemotoTVLatino />
        {/* <ControlRemotoUniversalMini /> */}
        <Canales />
        {/* <NodeMCU /> */}
        {/* <Arranger5000/> */}
      </Box>r
    </StateContext.Provider>
  );
}