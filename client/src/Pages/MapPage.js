import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';

import {getPlacesData} from '../api';
import axios from 'axios';

const MapPage = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        });
    }, []);

    useEffect(() => {
        getPlacesData(coordinates.lat, coordinates.lng).then((data) => {
            console.log(data);
            setPlaces(data);
        });
    }, [coordinates, places]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '%100', marginTop: 100}}>
                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map setCoordinates={setCoordinates} coordinates={coordinates} places={places} />
                </Grid>
            </Grid>
        </>
    );
};

export default MapPage;
