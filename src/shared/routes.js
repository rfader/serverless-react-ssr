import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/app';
import HomeComponent from './components/home';
import AboutComponent from './components/about';

export default (
    <Route path="/" component={AppComponent}>
        <IndexRoute component={HomeComponent} />
        <Route path='about' component={AboutComponent} />
    </Route>
);

