import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import NavbarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavbarContainer} />
    <ProtectedRoute exact path="/" component={MainPage} />
    <Switch>
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;