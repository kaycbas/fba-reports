import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

function Dashboard({ fetchUsers, users }) {
    useEffect(() => {
        if (users.length === 0) fetchUsers();
    }, [users]);

    const renderUsers = () => {
        if (users.length === 0) return null;
        return users.map(user => (
            <div className="user-list-item">{user.email}</div>
        ));
    }

    return (
        <div className='admin-dashboard-wrapper'>
            <h1 className="admin-dashboard-header">Admin Dashboard</h1>
            <div className="admin-dashboard-subheader">Connected Users:</div>
            {renderUsers()}
        </div>
    )
}

const mapStateToProps = (state, _ownProps) => ({
    users: Object.values(state.entities.users),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default Dashboard;