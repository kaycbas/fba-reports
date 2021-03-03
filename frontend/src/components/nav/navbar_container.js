import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

function Navbar({ logoutUser }) {
    return (
        <div className="navbar-wrapper">
            <h1>Imperial Flippers</h1>
            <div className="signout-btn" onClick={() => logoutUser()}>Sign Out</div>
        </div>
    )
}

// const mapStateToProps = (state, _ownProps) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Navbar);