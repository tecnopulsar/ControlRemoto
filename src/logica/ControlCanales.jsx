import React, { useContext } from 'react'
import StateContext from '../Context/StateContext'

function ControlCanales() {
    const {command, commandSended} = useContext(StateContext)
  return (
    <div>
        Comando: {command} 
        <br/>
        enviado: {commandSended}    
    </div>
  )
}

export default ControlCanales