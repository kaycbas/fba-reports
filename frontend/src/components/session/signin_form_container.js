import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { withRouter, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SigninForm ({ currentUser, login, errors, clearErrors }) {
    const history = useHistory();
    const [email, setEmail] = useState('');
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
        <div>
            <p>Sign In</p>
            <form className="signin-form" onSubmit={handleSubmit}>
                {renderErrors()}
                <div>
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <br/>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <br/>
                    <input type="submit" value="Submit" />
                    <Link className="session-switch-link" to="/signup">Sign up now &gt;</Link>
                </div>
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