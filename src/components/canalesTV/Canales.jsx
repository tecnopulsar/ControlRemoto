import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

import CardCanal from './CardCanal'
import FilterCanales from './FilterCanales';
import { Typography } from '@mui/material';
import StateContext from '../Context/StateContext';
import canalesDirecTVContext, { canalesDirecTV } from '../directv/Context/CanalesTVContext';

function Canales() {
  const [canales, setCanales] = useState(canalesDirecTV)
  const [canalesFiltrados, setCanalesFiltrados] = useState([])
  const [filterSelect, setFilterSelect] = useState('favoritos')

  const { stateControl } = useContext(StateContext)

  // Cargar estado de los canales Favoritos y Ocultos
  const loadDataFromLocalStorage = () => {
    const loadCanalesTV = localStorage.getItem('canalesTV')
    ? JSON.parse(localStorage.getItem('canalesTV'))
    : canalesDirecTV
    setCanales(loadCanalesTV)
  }
  // Fin Cargar estado de los canales Favoritos y Ocultos
  useEffect(() => {
    loadDataFromLocalStorage()
  }, [])
  
  
  useEffect(() => {
    let newCanalesFiltrados = []
    if (filterSelect === 'favoritos') {
      newCanalesFiltrados = canales.filter((canal) => {
        const [clave, valor] = Object.entries(canal)[0]
        return (valor.favorite && valor.show)
      })
    } else if (filterSelect === 'ocultos') {
      newCanalesFiltrados = canales.filter((canal) => {
        const [clave, valor] = Object.entries(canal)[0]
        return valor.show === false
      })
    } else {
      newCanalesFiltrados = canales.filter((canal) => {
        const [clave, valor] = Object.entries(canal)[0]
        return (valor.category === filterSelect && valor.show)
      })
    }
    setCanalesFiltrados(newCanalesFiltrados)
  }, [filterSelect, canalesFiltrados])

  return (
    <canalesDirecTVContext.Provider value={{ canales, setCanales }}>
      <Container maxWidth="sm">
        <Box sx={{
          margin: '20px',
          display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.5em'
        }}>
          <FilterCanales setFilterSelect={setFilterSelect} />
          <Typography sx={{ width: '100px', height: '40px', border: '1px solid', textAlign: 'center' }}>
            {stateControl.command}
          </Typography>
        </Box>

        <Box sx={{
          margin: '20px',
          display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.5em'
        }}>
          {canalesFiltrados.length === 0 &&
            <Box>
              <Alert severity="info">No hay canales agregados a {filterSelect}</Alert>
            </Box>
          }

          {canalesFiltrados.map(ch => {
            const [clave, value] = Object.entries(ch)[0]
            return <CardCanal key={Object.values(ch)[0].nro} canal={(Object.values(ch)[0])} />
          })}
        </Box>
      </Container>
    </canalesDirecTVContext.Provider>
  )
}

export default Canales