import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        fontWeight: '700',
        color: 'white',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    item: {
        width: '%100',
        maxWidth: 360,
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));
