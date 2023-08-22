import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StateContext from '../Context/StateContext';

export default function CardCanal({ canal }) {
    const { name, nro, img } = canal;
    const { stateControl, setStateControl } = React.useContext(StateContext)

    const handleClick = () => {
        // alert(`canal ${name} numero ${nro} fue elegido`)
        setStateControl({ ...stateControl, command: [nro] })
    }

    return (
        <Card sx={{ width: 100, height: 150 }}>
            <CardActionArea onClick={handleClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt={`imagen canal ${name}`}
                    sx={{ width: '90%', objectFit: 'contain', flexGrow: 1 }}
                />
                <CardContent sx={{
                    padding: 0,
                    height: '50%',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                    <Typography variant="h6" component="div"  >
                        {nro}
                    </Typography>
                    <Typography variant="body" component="div" color="text.secondary"
                        width={'100%'} textAlign={'center'} >
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}