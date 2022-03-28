import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import '../navbar/Navbar.css';
import '../../../paginas/home/Home'

function Navbar() {
    return (
        <>
            <AppBar className='corMenu' position="relative">
                <Toolbar variant="regular">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            LearnPointLogo
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <a className='link' href="home"> Home </a>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <a className='link' href="contato"> Sobre Nós </a>
                            </Typography>
                        </Box>
                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <a className='link' href="login"> Login</a>
                            </Typography>
                        </Box>
                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <a className='link' href="produtos">Cursos</a>
                            </Typography>
                        </Box>
                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <a className='link' href="login">Sair</a>
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;