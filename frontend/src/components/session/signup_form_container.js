import React, { useState, useEffect } from 'react';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SignupForm ({ currentUser, errors, signup , clearErrors}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    useEffect(() => {
        clearErrors();
    }, [clearErrors]);

    const signupUser = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            password2: passwordConfirmation,
        };
        signup(user);
    };

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
            <form className="session-form" onSubmit={signupUser}>
                <h3 className='session-header'>Sign Up</h3>
                {renderErrors()}
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Confirm Password"
                />
                <div className="submit-btn">
                    <input className="submit-btn" type="submit" value="Submit" />
                </div>
                <Link className="session-switch-link" to="/signin">Already have an account? Sign in &gt;</Link>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);