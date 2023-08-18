import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { canales } from './DBcanales'
import CardCanal from './CardCanal'
import FilterCanales from './FilterCanales';
import img_603 from "./img/603.png";
import img_604 from "./img/604.png";
import img_605 from "./img/605.png";
import img_606 from "./img/606.png";
import img_607 from "./img/607.png";
import img_608 from "./img/608.png";
import img_609 from "./img/609.png";
import img_610 from "./img/610.png";
import img_612 from "./img/612.png";
import img_613 from "./img/613.png";
import img_620 from "./img/620.png";
import img_621 from "./img/621.png";
import img_622 from "./img/622.png";
import img_623 from "./img/623.png";
import img_628 from "./img/628.png";
import img_629 from "./img/629.png";
import img_644 from "./img/644.png";
import img_654 from "./img/654.png";
import img_1603 from "./img/1603.png";
import img_1604 from "./img/1604.png";
import img_1605 from "./img/1605.png";
import img_1606 from "./img/1606.png";
import img_1607 from "./img/1607.png";
import img_1608 from "./img/1608.png";
import img_1609 from "./img/1609.png";
import img_1610 from "./img/1610.png";
import img_1612 from "./img/1612.png";
import img_1613 from "./img/1613.png";
import img_1614 from "./img/1614.png";
import img_1620 from "./img/1620.png";
import img_1621 from "./img/1621.png";
import img_1622 from "./img/1622.png";
import img_1623 from "./img/1623.png";
import img_1625 from "./img/1625.png";
import img_1628 from "./img/1628.png";
import img_1629 from "./img/1629.png";
import img_1654 from "./img/1654.png";
import img_1677 from "./img/1677.png";

function Canales() {
  const canalInit = canales.deportes[0]
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
