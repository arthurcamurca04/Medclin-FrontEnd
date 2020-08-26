import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

function Routes(){
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path="/" component={Login}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;