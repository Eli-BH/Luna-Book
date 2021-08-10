import {CssBaseline, Grid, TextField, Typography} from '@material-ui/core';
import React, {useState, useRef} from 'react';
import useStyles from './styles';

const SearchPage = () => {
    const query = useRef();
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Grid container spacing={12} style={{width: '%100', marginTop: 100}} className={classes.header}>
                <Typography gutterBottom variant="h5">
                    Search for comics
                </Typography>

                <TextField ref={query} id="outlined-basic" label="Search" variant="outlined" />
            </Grid>
        </>
    );
};

export default SearchPage;
