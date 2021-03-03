import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar({ loggedIn, logoutUser }) {
    const renderLogout = () => {
        // if (!loggedIn) return null;
        return <div className="signout-btn" onClick={() => logoutUser()}>Sign Out</div>
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

export default connect(null, mapDispatchToProps)(Navbar);