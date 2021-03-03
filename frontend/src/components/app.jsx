import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import "../App.scss";

import NavbarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import AdminFormContainer from './session/admin_form_container';

const App = () => (
  <div>
    <Switch>
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/admin" component={AdminFormContainer} />
        
        <ProtectedRoute path="/" component={NavbarContainer} />
        <ProtectedRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;