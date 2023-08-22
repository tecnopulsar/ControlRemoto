import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterCanales({setFilterSelect}) {
    const [value, setValue] = React.useState(categorias[0]);
    return (
        <Autocomplete
            disablePortal
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setFilterSelect(newValue)
            }}
            id="combo-box-demo"
            options={categorias}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Categorias" />}
        />
    );
}

// Categorias de canales
const categorias = [ 'Deportes', 'HD','PREMIUM'];