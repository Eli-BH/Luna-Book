import React, {useState, useEffect} from 'react';

import Products from '../components/Products/Products';
import ShopNavBar from '../components/ShopNavBar/ShopNavBar';

import {commerce} from '../lib/commerce';

const ShopPage = ({cart, setCart}) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <div style={{marginTop: 100}}>
            <ShopNavBar totalItems={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart} />
            {/* <Cart cart={cart} /> */}
        </div>
    );
};

export default ShopPage;
