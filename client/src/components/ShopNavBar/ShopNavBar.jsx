import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import useStyles from './styles';

const ShopNavBar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    // const mobileMenuId = 'primary-search-account-menu-mobile';

    // const renderMobileMenu = (
    //     <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right'}} id={mobileMenuId} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
    //         <MenuItem>
    //             <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
    //                 <Badge badgeContent={totalItems} color="secondary">
    //                     <ShoppingCart />
    //                 </Badge>
    //             </IconButton>
    //             <p>Cart</p>
    //         </MenuItem>
    //     </Menu>
    // );
    return (
        <>
            <AppBar className={classes.appBar} color="default">
                <Toolbar>
                    <Typography component={Link} to="/shop" variant="h6" className={classes.title} color="inherit">
                        Luna Shop
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/shop' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default ShopNavBar;
