import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function SignupForm (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <p>Sign Up!</p>
        </div>
    )
}

export default withRouter(SignupForm);