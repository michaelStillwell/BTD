// Import React
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import GamePage from './components/GamePage/GamePage';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/game" component={GamePage} />
            </Switch>
        )
    }
}

export default Routes;