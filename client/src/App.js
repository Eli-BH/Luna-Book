import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ChatPage from './Pages/ChatPage';
import ComicPage from './Pages/ComicPage';
import HomePage from './Pages/HomePage';
import MapPage from './Pages/MapPage';
import SearchPage from './Pages/SearchPage';
import ShopPage from './Pages/ShopPage';

const App = () => {
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
                    <ShopPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
