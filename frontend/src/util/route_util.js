import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, currentUser, exact }) => {
  const renderComponent = (props) => {
    if (!loggedIn) {
      return <Component {...props} />
    } else if (loggedIn && currentUser.id === '6040030a57d92535c416626d') {
      return <Redirect to="/admin/dashboard" />
    } else {
      return <Redirect to="/" />
    }
  }


  return <Route path={path} exact={exact} render={(props) => (
    renderComponent(props)
  )} />
}

const Protected = ({ component: Component, loggedIn, currentUser, ...rest }) => {
  const renderComponent = (props) => {
    if (loggedIn && currentUser.id === '6040030a57d92535c416626d') {
      return <Redirect to="/admin/dashboard" />
    } else if (loggedIn) {
      return <Component {...props} />
    } else {
      return <Redirect to="/signin" />
    }
  }
  
  return <Route
    {...rest}
    render={ props => renderComponent(props) }
  />
}

const Admin = ({ component: Component, loggedIn, currentUser, ...rest }) => {
  const renderComponent = (props) => {
    if (loggedIn && currentUser.id === '6040030a57d92535c416626d') {
      return <Component {...props} />
    } else if (loggedIn) {
      return <Redirect to="/" />
    } else {
      return <Redirect to="/signin" />
    }
  }

  return <Route
    {...rest}
    render={ props => renderComponent(props) }
  />
}

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => (
  {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
  }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const AdminRoute = withRouter(connect(mapStateToProps)(Admin));