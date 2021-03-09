import React, { useState } from 'react'

export default function Step1({ currentStep, next, prev }) {
    const [verified, setVerified] = useState(false);

    if (currentStep !== 1) return null;
    return (
        <div className="step-wrapper">
            <div className="step-header">Step 1</div>
            <div className="connection-instructions">
                <li>Go to the <a href="https://sellercentral.amazon.com/apps/manage">Manage your apps</a> page in Seller Central and log into your Amazon selling account as the primary account holder.</li>
                <li>Click the 'Authorize new developer' button and follow the authorization workflow.</li>
                <li>When prompted, enter the below Developer ID.</li>
                <div className="step-dev-id">HFJK543KJL5</div>
                <li>Once complete, click the Verify button below to validate that the connection was successful.</li>
            </div>
            <div className="step-ctrls">
                <button className="step-btn" onClick={() => prev()}>Previous</button>
                <button className="verify-btn">Verify</button>
                <button className="step-btn" onClick={() => next()}>Next</button>
            </div>
        </div>
    )
}
