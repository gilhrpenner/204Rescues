import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import CityMap from './pages/CityMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={CityMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
