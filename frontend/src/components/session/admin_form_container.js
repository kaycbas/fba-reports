import React, { useState, useEffect } from 'react';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SigninForm ({ currentUser, login, errors, clearErrors }) {
    const email = 'admin@gmail.com';
    const [password, setPassword] = useState('');

    useEffect(() => {
        clearErrors();
    }, [clearErrors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email,
            password
        };
        login(user);
        // console.log('submitted login');
    }

    const renderErrors = () => {
        if (!errors || errors.length === 0) return null;
        console.log(`Errors: ${Object.values(errors)}`);
        return (
            <ul className="session-errors">
                {Object.values(errors).map((err, i) => (
                    <li key={`error-${i}`}>{err}</li>
                ))}
            </ul>
        );
    }

    return (
        <div className="session-wrapper">
            <form className="session-form" onSubmit={handleSubmit}>
                <h3 className='session-header'>Admin Sign In</h3>
                {renderErrors()}
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <div className="submit-btn">
                    <input className="submit-btn" type="submit" value="Submit" />
                </div>
                {/* <Link className="session-switch-link" to="/signup">No account? Sign up &gt;</Link> */}
            </form>
        </div>
    )
}

const mapStateToProps = (state, _ownProps) => ({
  currentUser: state.session.user,
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);