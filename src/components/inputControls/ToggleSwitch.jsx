import React, { useContext, useState } from 'react';
import Switch from '@mui/material/Switch';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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