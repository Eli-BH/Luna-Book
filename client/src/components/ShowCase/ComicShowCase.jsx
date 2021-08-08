import React, {useEffect, useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Typography} from '@material-ui/core';
import axios from 'axios';
import useStyles from './styles';

const ComicShowCase = () => {
    const classes = useStyles();
    const [comics, setComics] = useState(null);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const {data} = await axios.get('http://localhost:4000/new_comics');

                setComics(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchComics();
    }, []);

    console.log(comics);
    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            {comics ? (
                <Grid container justify="center" spacing={4}>
                    {comics.map((comic) => (
                        <Grid item key={comic.id} xs={12} sm={6} md={4} lg={2}>
                            <Card className={classes.cardRoot}>
                                <CardActionArea>
                                    <CardMedia className={classes.media} image={comic.image.original_url} title={comic.volume.name} />
                                    <CardContent className={classes.cardContent}>
                                        <div>
                                            <Typography variant="body2" gutterBottom>
                                                {comic.volume.name}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default ComicShowCase;
