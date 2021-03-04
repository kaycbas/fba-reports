import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

function Dashboard({ fetchUsers }) {
    useEffect(() => {
        fetchUsers();
    });

    return (
        <div className='admin-dashboard-wrapper'>
            <h1>Admin Dashboard</h1>
        </div>
    )
}

// const mapStateToProps = (state, _ownProps) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(null, mapDispatchToProps)(Dashboard);
// export default Dashboard;