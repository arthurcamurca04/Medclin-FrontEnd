import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import ProfessionalForm from '../pages/ProfessionalsForm';
import ProfessionalFormUpdate from '../pages/ProfessionalsFormUpdate';
import UsersForm from '../pages/UsersForm';

function Routes(){
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin/dashboard" component={AdminDashboard}/>
                    <Route path="/admin/signup_prof" component={ProfessionalForm}/>
                    <Route path="/admin/update_prof" component={ProfessionalFormUpdate}/>
                    <Route path="/users/form" component={UsersForm}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;