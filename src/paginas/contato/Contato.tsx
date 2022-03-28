import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import CarouselComponent from '../../componentes/carousel/CarouselComponent';
import './Contato.css';

function Contato() {
    return (
        <>
            <Grid className='margin' container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <CarouselComponent />
                </Grid>
            </Grid>
        </>
    );
}

export default Contato;