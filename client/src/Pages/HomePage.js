import React from 'react';
import LunaBook from '../components/Banner/Banner';
import useStyles from './styles';

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LunaBook />
        </div>
    );
};

export default HomePage;
