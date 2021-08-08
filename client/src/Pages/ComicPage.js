import axios from 'axios';
import {useParams} from 'react-router-dom';
import useStyles from './styles';
import {useEffect, useState} from 'react';
import {Card, CardContent, CardMedia, Grid, List, ListItemText, Typography} from '@material-ui/core';

const ComicPage = () => {
    const classes = useStyles();
    const {id} = useParams();
    const [comic, setComic] = useState(null);

    useEffect(() => {
        const fetchComic = async () => {
            try {
                const {data} = await axios.get(`http://localhost:4000/single_comic/${id}`);
                setComic(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchComic();
    }, [id]);

    console.log(comic);

    return comic ? (
        <div className={classes.root}>
            <Grid container spacing={4} style={{padding: 40}}>
                <Grid item lg={6} xs={12}>
                    <Card>
                        <CardMedia component="img" image={comic.image.original_url} title={comic.volume.name} />
                        <CardContent style={{textAlign: 'center'}}>
                            <Typography variant="body2" gutterBottom>
                                {comic.cover_date}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Typography variant="h3" gutterBottom>
                        {comic.volume.name} #{comic.issue_number}
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                        Characters:
                    </Typography>
                    <List>
                        {comic.character_credits.map((item) => (
                            <ListItemText key={item.id} primary={item.name} />
                        ))}
                    </List>

                    <Typography variant="h5" gutterBottom>
                        Description:
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{__html: comic.description}} variant="body2" />
                    {comic.person_credits.length > 0 && (
                        <Typography variant="h5" gutterBottom>
                            Credits:
                        </Typography>
                    )}

                    <List>
                        {comic.person_credits.map((item) => (
                            <ListItemText key={item.id} primary={item.name} />
                        ))}
                    </List>
                </Grid>
            </Grid>
        </div>
    ) : (
        <h1>Loading</h1>
    );
};

export default ComicPage;
