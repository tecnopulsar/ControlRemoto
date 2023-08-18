import React, { useContext } from 'react'
import StateContext from '../Context/StateContext'

function ControlCanales() {
  const { stateControl, setStateControl } = useContext(StateContext)
  const { command, commandSended } = stateControl
  return (
    <div>
      {command}
      <br />
      enviado: {commandSended ? 'True' : 'False'}
    </div>
  )
}

export default ControlCanales