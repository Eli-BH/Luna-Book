import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Link} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import useStyles from './styles';

const ShopNavBar = ({totalItems}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar} color="default">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        Luna Shop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default ShopNavBar;
