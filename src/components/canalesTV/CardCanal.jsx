import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import StateContext from '../Context/StateContext';

import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import canalesDirecTVContext from '../directv/Context/CanalesTVContext';

export default function CardCanal({ canal, filterSelect }) {
    const { name, nro, img, favorite, show } = canal;
    const { stateControl, setStateControl } = React.useContext(StateContext)
    const { canales, setCanales } = React.useContext(canalesDirecTVContext)

    const [isFavorite, setIsFavorite] = React.useState(false)

    React.useEffect(() => {
        setIsFavorite(favorite)
    }, [])

    const handleClick = () => {
        // alert(`canal ${name} numero ${nro} fue elegido`)
        setStateControl({ ...stateControl, command: [nro] })
    }

    const handleClickFavorite = () => {
        const newIsFavorite = !isFavorite
        setIsFavorite(newIsFavorite)

        canales[`${filterSelect}`].forEach(canal => {
            const [clave, objeto] = Object.entries(canal)[0];
            if (objeto.nro === nro) objeto.favorite = newIsFavorite
        });
        setCanales(canales)
        // Como los canales favoritos son relativamente pocos, opto por 
        //agregar y eliminarlos al seleccionarlos del filtro favoritos
        if (newIsFavorite) {
            const newCanal =       {
                [`ch_${nro}`]: {
                  "name": name,
                  "nro": nro,
                  "img": img,
                  "favorite": true,
                  "show": show,
                }
              }
            const Favoritos = [...canales.Favoritos, newCanal]
            setCanales({...canales,Favoritos})
        } else {
            const Favoritos = canales.Favoritos.filter(canal=>canal.nro!==nro)
            console.log(Favoritos)
        }
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
                        background: isFavorite ? 'orange' : 'white', opacity: '0.6',
                        position: 'absolute', right: '0', top: '0'
                    }}
                        aria-label="add favoritos"
                        onClick={handleClickFavorite} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

