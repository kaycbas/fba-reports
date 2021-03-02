import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function SigninForm (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <p>Sign In!</p>
        </div>
    )
}

export default withRouter(SigninForm);