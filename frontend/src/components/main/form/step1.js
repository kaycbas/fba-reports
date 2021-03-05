import React from 'react'

export default function Step1({ currentStep, next, prev }) {
    if (currentStep !== 1) return null;
    return (
        <div>
            Step 1
            <button onClick={() => next()}>Next</button>
            <button onClick={() => prev()}>Prev</button>
        </div>
    )
}
