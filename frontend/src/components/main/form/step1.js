import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Step1({ currentStep, next, prev }) {
    const [verified, setVerified] = useState(false);

    if (currentStep !== 1) return null;
    return (
        <div className="step-wrapper">
            <div className="step-header">Step 1</div>
            <div className="authorize-btn-wrapper">
                {/* <Link to='www.google.com'>Authorize link</Link> */}
                <a className="authorize-btn" href="https://sellercentral.amazon.com/apps/authorize/consent?application_id=
amzn1.application-oa2-client.b10b79de4d3f4a908aa313070b3c83c9&version=beta" target="_blank">Authorize</a>
            </div>
            <div className="step-ctrls">
                <button className="step-btn" onClick={() => prev()}>Previous</button>
                <button className="step-btn" onClick={() => next()}>Next</button>
            </div>
        </div>
    )
}
