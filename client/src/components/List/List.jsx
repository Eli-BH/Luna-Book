import React from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl} from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';
const List = () => {
    const classes = useStyles();

    const places = [{name: 'Cool Place'}, {name: 'comic stop'}, {name: 'Best comics'}, {name: 'Cool Place'}, {name: 'comic stop'}, {name: 'Best comics'}, {name: 'Cool Place'}, {name: 'comic stop'}, {name: 'Best comics'}];

    return (
        <div className={classes.container}>
            <Typography variant="h4">Comic Shops around you!</Typography>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default List;
