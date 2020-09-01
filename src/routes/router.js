import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import ProfessionalForm from '../pages/ProfessionalsForm'

function Routes(){
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin/dashboard" component={AdminDashboard}/>
                    <Route path="/signup_prof" component={ProfessionalForm}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;