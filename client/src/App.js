import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Navbar from './components/NavBar/Navbar';
import ChatPage from './Pages/ChatPage';
import ComicPage from './Pages/ComicPage';
import HomePage from './Pages/HomePage';
import MapPage from './Pages/MapPage';
import SearchPage from './Pages/SearchPage';
import ShopPage from './Pages/ShopPage';

import {commerce} from './lib/commerce';
import Checkout from './components/CheckoutForm/Checkout/Checkout';

const App = () => {
    const [cart, setCart] = useState({});

    const handleUpdateCartQty = async (productId, amt) => {
        const {cart} = await commerce.cart.update(productId, {quantity: amt});

        setCart(cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);

        setCart(cart);
    };

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();

        setCart(cart);
    };

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/comic/:id">
                    <ComicPage />
                </Route>
                <Route path="/map" exact>
                    <MapPage />
                </Route>
                <Route path="/chat" exact>
                    <ChatPage />
                </Route>
                <Route path="/search" exact>
                    <SearchPage />
                </Route>
                <Route path="/shop" exact>
                    <ShopPage cart={cart} setCart={setCart} />
                </Route>
                <Route path="/cart" exact>
                    <Cart cart={cart} onEmptyCart={handleEmptyCart} onRemoveFromCart={handleRemoveFromCart} onUpdateCartQty={handleUpdateCartQty} setCart={setCart} />
                </Route>
                <Route path="/checkout">
                    <Checkout cart={cart} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
