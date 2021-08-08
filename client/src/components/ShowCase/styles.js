import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        overflowY: 'scroll',
        height: 500,
    },
    root: {
        flexGrow: 1,
    },
    cardRoot: {
        maxWidth: '100%',
        textAlign: 'center',
    },
    media: {
        height: 200,
        paddingTop: '56.25%',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
