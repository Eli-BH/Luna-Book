import React, {useEffect, useState} from 'react';
import {Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Link, Paper, Typography} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import useStyles from './styles';

const Banner = () => {
    const classes = useStyles();
    const [bannerComics, setBannerComics] = useState(null);

    useEffect(() => {
        const getBannerComics = async () => {
            try {
                const {data} = await axios.get('http://localhost:4000/banner_comics');
                setBannerComics(data.results);
            } catch (error) {
                console.log(error);
            }
        };

        getBannerComics();
    }, []);

    return bannerComics ? (
        <div className={classes.root}>
            <Paper elevation={3} style={{padding: 15}}>
                {' '}
                <Typography variant="h3" className={classes.title}>
                    Welcome to LunaBook
                </Typography>
                <Carousel autoPlay interval={3000}>
                    {bannerComics.map((item, index) => (
                        <Card className={classes.cardBase}>
                            <CardActionArea className={classes.actionArea}>
                                <CardMedia className={classes.media} image={item.image.original_url} title={item.volume.name} />

                                <CardContent className={classes.content}>
                                    <Typography variant="h4">{item.volume.name}</Typography>
                                    <Button className={classes.button} variant="contained" color="secondary" component={Link} to={`/comic/${item.id}`}>
                                        Check this book out!
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Carousel>
            </Paper>
        </div>
    ) : (
        <CircularProgress />
    );
};

export default Banner;
