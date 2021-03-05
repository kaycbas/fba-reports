import React from 'react'

export default function Step2({ currentStep, next, prev }) {
    if (currentStep !== 2) return null;
    return (
        <div className="step-wrapper">
            <div className="step-header">Step 2</div>
            <div className="step-ctrls">
                <button className="step-btn" onClick={() => prev()}>Previous</button>
                <button className="step-btn" onClick={() => next()}>Next</button>
            </div>
        </div>
    )
}
