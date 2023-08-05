import { Typography } from '@mui/material'
import './App.css'
import ModoControl from './components/ModoControl'
import Control from './components/directv/Control'
import StateContext, { stateControlInit } from "./Context/StateContext";
import { useEffect, useState } from 'react'
import ComandoDTVSnackbar from './components/display/comandoDTVSnackbar';

function App() {
  const [stateControl, setStateControl] = useState(stateControlInit)
  const [commandDisplay, setcommandDisplay] = useState([])

  useEffect(() => {
    if (stateControl.listPress.length !== 0) {
      setcommandDisplay(stateControl.listPress)
      const sendCommand = stateControl.listPress;
      setStateControl({ ...stateControl, sendCommand })
      if (!isNaN(stateControl.listPress[0])) {
        const idTimeout = setTimeout(() => {
          setcommandDisplay([]);
          const btnPress = '';
          const listPress = [];
          const sendCommand = []
          setStateControl({ ...stateControl, btnPress, listPress, sendCommand })
        }, 3000)
        return (() => clearTimeout(idTimeout))
      } else {
        const idTimeout = setTimeout(() => {
          setcommandDisplay([]);
          const btnPress = '';
          const listPress = [];
          const sendCommand = []
          setStateControl({ ...stateControl, btnPress, listPress, sendCommand })
        }, 800)
        return (() => clearTimeout(idTimeout))
      }
    }
  }, [stateControl.listPress])

  return (
    <StateContext.Provider value={{ stateControl, setStateControl }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Control />
        <div style={{ marginLeft: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <ModoControl />
          <Typography variant='h3' display='block'>{commandDisplay}</Typography>
          <ComandoDTVSnackbar />
        </div>
      </div>
    </StateContext.Provider>
  )
}

export default App
