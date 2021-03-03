import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

function Navbar({ logoutUser }) {
    return (
        <div>
            <h1>Imperial Flippers</h1>
            <button onClick={() => logoutUser()}>Sign Out</button>
        </div>
    )
}

// const mapStateToProps = (state, _ownProps) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Navbar);