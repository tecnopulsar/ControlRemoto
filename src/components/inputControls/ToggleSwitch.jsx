import React, { useContext, useState } from 'react';
import Switch from '@mui/material/Switch';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import StateContext from '../../Context/StateContext';

export default function ToggleSwitch() {
  const [checked, setChecked] =useState(true);
  const { stateControl, setStateControl } = useContext(StateContext)

  const handleChange = (event) => {
    setChecked(event.target.checked);
    const modeSecuence = checked;
    setStateControl({...stateControl,modeSecuence})
  };

  return (
    <FormGroup>
      <FormControlLabel control={
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      } label="Secuencial" />
    </FormGroup>

  );
}