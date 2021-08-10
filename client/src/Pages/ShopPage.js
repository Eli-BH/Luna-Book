import React from 'react';
import Products from '../components/Products/Products';
import ShopNavBar from '../components/ShopNavBar/ShopNavBar';

const ShopPage = () => {
    return (
        <div style={{marginTop: 100}}>
            <ShopNavBar />
            <Products />
        </div>
    );
};

export default ShopPage;
