import React from 'react'

export default function Step2({ currentStep, next, prev }) {
    if (currentStep !== 2) return null;
    return (
        <div className="step-wrapper">
            <div>Step 2</div>
            <div className="step-ctrls">
                <button className="step-btn" onClick={() => prev()}>Prev</button>
                <button className="step-btn" onClick={() => next()}>Next</button>
            </div>
        </div>
    )
}
