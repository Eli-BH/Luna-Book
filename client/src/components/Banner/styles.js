import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardBase: {
        display: 'flex',
        width: '90vw',
    },
    media: {
        height: 300,
        width: 200,
    },
    actionArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    button: {
        maxWidth: 300,
    },
    title: {
        textAlign: 'center',
    },
}));
