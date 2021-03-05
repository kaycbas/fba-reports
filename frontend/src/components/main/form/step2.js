import React from 'react'

export default function Step2({ currentStep, next, prev }) {
    if (currentStep !== 2) return null;
    return (
        <div>
            Step 2
            <button onClick={() => next()}>Next</button>
            <button onClick={() => prev()}>Prev</button>
        </div>
    )
}
