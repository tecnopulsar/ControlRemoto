import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { canalesTV } from '../../canalesTV/DBcanalesTV'
import CardCanal from './CardCanal'
import FilterCanales from './FilterCanales';
import { Typography } from '@mui/material';
import StateContext from '../../Context/StateContext';

function Canales() {
  const canalInit = canalesTV.DirecTV.Deportes[0]
  const [canal, setCanal] = useState(canalInit)
  const [filterSelect, setFilterSelect] = useState('Deportes')

  const { stateControl } = useContext(StateContext)


  return (
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
        {canalesTV.DirecTV[`${filterSelect}`].map((ch) =>
          <CardCanal key={Object.values(ch)[0].nro} canal={(Object.values(ch)[0])} />
        )}
      </Box>

    </Container>
  )
}

export default Canales
