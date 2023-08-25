import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CardCanal from './CardCanal'
import FilterCanales from './FilterCanales';
import { Typography } from '@mui/material';
import StateContext from '../Context/StateContext';
import canalesDirecTVContext,{ canalesDirecTV } from '../directv/Context/CanalesTVContext';

function Canales() {
  const [canales, setCanales] = useState(canalesDirecTV)
  const [filterSelect, setFilterSelect] = useState('Deportes')

  const { stateControl } = useContext(StateContext)


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
          {canales[`${filterSelect}`].map((ch) =>
            <CardCanal key={Object.values(ch)[0].nro} canal={(Object.values(ch)[0])} filterSelect={filterSelect} />
          )}
        </Box>

      </Container>
    </canalesDirecTVContext.Provider>
  )
}

export default Canales
