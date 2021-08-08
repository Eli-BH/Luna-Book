import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ComicPage from './Pages/ComicPage';
import HomePage from './Pages/HomePage';

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
            </Switch>
        </Router>
    );
};

export default App;
