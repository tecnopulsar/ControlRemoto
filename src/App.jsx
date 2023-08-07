import { Typography } from '@mui/material'
import './App.css'
import ModoControl from './components/ModoControl'
import Control from './components/directv/Control'

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Control />
      </div>
    </>
  )
}

export default App
