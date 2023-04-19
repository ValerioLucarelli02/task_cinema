import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardActions, Button, Link, CardMedia } from '@mui/material'
import { Film } from '../../interfaces/film.interface';

interface FilmCardProps{
    film:Film,

}
interface Date{
    date:Date
}


 export const FilmCardProps = ({film}:FilmCardProps) => {

    return (
        <>
           
            <Card style={{marginTop: 20}}>
                <CardActionArea>
                <CardMedia
                    component={"img"}
                    sx={{height:300,width:300}}
                    image={"https://secure.webtic.it/angwt/" + film.Picture}
                   
                   
                    />
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {film.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {film.OriginalTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            DESCRIZIONE:
                            {film.Description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ATTORI:
                            {film.Actors}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            REGISTA:
                            {film.Director}
                        </Typography>
                        <Typography variant="caption" color="text.primary">
                            <br/>
                   
                        </Typography>
                    </CardContent>
                   
                    <CardActions>
                        
                    </CardActions>
                </CardActionArea>
            </Card>
        </>
    )

}

