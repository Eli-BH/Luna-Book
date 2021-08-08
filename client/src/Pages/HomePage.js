import {Typography} from '@material-ui/core';
import React from 'react';
import LunaBook from '../components/Banner/Banner';
import ComicShowCase from '../components/ShowCase/ComicShowCase';
import useStyles from './styles';

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LunaBook />
            <div style={{width: '100%', textAlign: 'center', marginTop: 50}}>
                <Typography variant="h2">100 new Comics!</Typography>
            </div>

            <ComicShowCase />
        </div>
    );
};

export default HomePage;
