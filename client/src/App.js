import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route></Route>
            </Switch>
        </Router>
    );
};

export default App;
