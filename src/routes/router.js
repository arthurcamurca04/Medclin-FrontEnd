import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function Routes(){
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;