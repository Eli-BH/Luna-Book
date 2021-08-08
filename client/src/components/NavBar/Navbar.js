import React, {useState} from 'react';
import {AppBar, Typography, Toolbar, IconButton, Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const [drawerToggle, setDrawerToggle] = useState(false);

    const toggleDrawerOpen = () => {
        setDrawerToggle(true);
    };
    const toggleDrawerClose = () => {
        setDrawerToggle(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Luna Book
                    </Typography>
                    <div className={classes.grow} />
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <>
                <Drawer anchor="right" open={drawerToggle} onClose={toggleDrawerClose} className={classes.drawer}>
                    <div className={classes.list}>
                        <List component="nav" aria-label="Menu items" className={classes.fullList}>
                            <ListItem button>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Map" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </>
        </div>
    );
};

export default Navbar;
