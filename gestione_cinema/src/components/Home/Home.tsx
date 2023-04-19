import   React, {useEffect, useState} from 'react';
import { Component } from 'react';
import { Film } from '../../interfaces/film.interface';
import { getAll } from '../../services/ad.services';
import { Container, Grid } from '@mui/material';
import { FilmCardProps } from './Card';
import { LayoutPage } from '../../Layout/LayoutHoc';


const Home =()=> {

    const [elenco,setElenco] = useState<Film[]>();

    useEffect( ()=>{

        getAll()
        .then (res=>{
            if(res)
            setElenco(res)


        })

    },[])
    return(
        <>
        <Container>
              
                {elenco?.map((obj:Film,idx:number)=>(
                    <>
                        <Grid container justifyContent={'center'} mt={1} px={3} spacing={2}>
                        <FilmCardProps key={idx} film={obj}/>
                        </Grid>
                    </>
                ))}
               
            
        </Container>
        


        </>
    )
}

const LayoutHome= LayoutPage(Home);
export {LayoutHome}