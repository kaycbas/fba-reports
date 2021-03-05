import React from 'react'

export default function Step1({ currentStep, next, prev }) {
    if (currentStep !== 1) return null;
    return (
        <div className="step-wrapper">
            <div>Step 1</div>
            <div className="connection-instructions">
                <li>1. Log into your Seller Central account as the primary account holder.</li>
                <li>2. Click the 'Authenticate New Developer' button and follow the authorization workflow.</li>
                <li>3. When prompted, enter the below Developer ID.</li>
                <div className="step-dev-id">HFJK543KJL5</div>
            </div>
            <div className="step-ctrls">
                <button className="step-btn" onClick={() => prev()}>Prev</button>
                <button className="step-btn" onClick={() => next()}>Next</button>
            </div>
        </div>
    )
}