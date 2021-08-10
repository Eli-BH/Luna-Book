import {useState} from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import axios from 'axios';

const PlaceDetails = ({place}) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography component="legend">
                        {place.user_ratings_total} review{place.user_ratings_total > 1 && 's'}
                    </Typography>
                </Box>
                {place.formatted_address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />
                        {place.formatted_address}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;
