import {Card, CardMedia, CssBaseline, Grid, Paper, TextField, Typography} from '@material-ui/core';
import axios from 'axios';
import React, {useState} from 'react';
import useStyles from './styles';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const classes = useStyles();
    const [characters, setCharacters] = useState([]);

    const fetchResults = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.get(`http://localhost:4000/search/${query}`);

            setCharacters(data);
            console.log(query);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <CssBaseline />
            <Grid container spacing={4} style={{width: '%100', marginTop: 100, flexGrow: 1}} className={classes.header}>
                <Typography gutterBottom variant="h5">
                    Search for Characters
                </Typography>

                <form onSubmit={fetchResults}>
                    <TextField onChange={(e) => setQuery(e.target.value)} id="outlined-basic" label="Search" variant="outlined" />
                </form>
                {characters.length > 0 && (
                    <Typography variant="h2" gutterBottom>
                        Results for: {query}
                    </Typography>
                )}

                {characters.length > 0 &&
                    characters?.map((character) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={character.id}>
                            <Paper elevation={6}>
                                <Card style={{width: 200}}>
                                    <CardMedia image={character.image.original_url} title={character.name} style={{height: 250}} />
                                    <Typography variant="body1">{character.name}</Typography>
                                    <Typography variant="body2">{character.publisher.name}</Typography>
                                </Card>
                            </Paper>
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

export default SearchPage;
