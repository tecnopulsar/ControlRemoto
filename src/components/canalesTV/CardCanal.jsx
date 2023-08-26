import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import StateContext from '../Context/StateContext';
import canalesDirecTVContext from '../directv/Context/CanalesTVContext';

import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


export default function CardCanal({ canal }) {
    const { name, nro, img, favorite, show } = canal;
    const { stateControl, setStateControl } = React.useContext(StateContext)
    const { canales, setCanales } = React.useContext(canalesDirecTVContext)

    const [isFavorite, setIsFavorite] = React.useState(false)
    const [isShow, setIsShow] = React.useState(true)

    //Carga el boton si es o no favorito
    React.useEffect(() => {
        setIsFavorite(favorite)
        setIsShow(show)
    }, [])

    const handleClick = () => {
        // alert(`canal ${name} numero ${nro} fue elegido`)
        setStateControl({ ...stateControl, command: [nro] })
    }

    const handleClickFavorite = () => {
        const newIsFavorite = !isFavorite
        setIsFavorite(newIsFavorite)

        canales.forEach(ch => {
            const [clave, objeto] = Object.entries(ch)[0];
            if (objeto.nro === nro) objeto.favorite = newIsFavorite
        });
    }

    const handleClickShow = () => {
        setIsShow(false)

        canales.forEach(ch => {
            const [clave, objeto] = Object.entries(ch)[0];
            if (objeto.nro === nro) objeto.show = false
        });
    }

    const handleClickNotShow = () => {
        setIsShow(true)

        canales.forEach(ch => {
            const [clave, objeto] = Object.entries(ch)[0];
            if (objeto.nro === nro) objeto.show = true
        });
    }

    return (
        <Card sx={{ width: 100, height: 150, backgroundColor: 'lightgrey' }}>
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
                    <BookmarkAddOutlinedIcon sx={{
                        color: isFavorite ? 'white' : 'black',
                        background: isFavorite ? 'orange' : 'null', opacity: '0.6',
                        position: 'absolute', right: '0', top: '0'
                    }}
                        aria-label="add favoritos"
                        onClick={handleClickFavorite} />
                    {isShow ?
                        <RemoveCircleOutlineIcon sx={{
                        color: 'red',
                         opacity: '0.3',
                        position: 'absolute', right: '0', bottom: '0'
                        }}
                        aria-label="remove channel"
                        onClick={handleClickShow} />  
                        :
                        <ControlPointIcon sx={{
                            color: 'green',
                             opacity: '0.6',
                            position: 'absolute', right: '0', bottom: '0'
                            }}
                            aria-label="remove channel"
                            onClick={handleClickNotShow} />
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

