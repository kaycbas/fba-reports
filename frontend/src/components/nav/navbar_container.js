import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ loggedIn, logoutUser }) {
    const location = useLocation();
    const renderLogout = () => {
        if (loggedIn) {
            return <div className="nav-btn" onClick={() => logoutUser()}>Sign Out</div>
        } else if (location.pathname === '/admin') {
            return <Link className="nav-btn" to="/signin">Home</Link>
        } else {
            return <Link className="nav-btn" to="/admin">Admin</Link>
        }
    }

    return (
        <div className="navbar-wrapper">
            <Link className="navbar-logo" to="/">Imperial Flippers</Link>
            {renderLogout()}
        </div>
    )
}

const mapStateToProps = (state, _ownProps) => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);