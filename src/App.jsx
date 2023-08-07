import './App.css'
import Liberty from './components/Tablero/Liberty'
import ControlRemoto from './components/directv/ControlRemoto'

function App() {

  return (
    <>
    <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <ControlRemoto />
        <Liberty/>
      </div>
    </div>

    </>
  )
}

export default App