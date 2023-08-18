import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { canales } from './DBcanales'
import CardCanal from './CardCanal'
import FilterCanales from './FilterCanales';

function Canales() {
  const canalInit = canales.Deportes[0]
  const [canal, setCanal] = useState(canalInit)
  const [filterSelect, setFilterSelect] = useState('deportes')

  return (
    <Container maxWidth="sm">
      <Box sx={{ margin:'20px',
        display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5em'
      }}>
        <FilterCanales setFilterSelect={setFilterSelect}/>
      </Box>
      <Box sx={{ margin:'20px',
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5em'
      }}>
        {canales[`${filterSelect}`].map((ch) => <CardCanal key={Object.values(ch)[0].nro} canal={(Object.values(ch)[0])} />)}
      </Box>

    </Container>
  )
}

export default Canales
