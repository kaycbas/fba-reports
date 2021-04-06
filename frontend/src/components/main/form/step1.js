import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Step1({ currentStep, next, prev }) {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const nextBtn = document.querySelector('.after-auth-next-btn');
        nextBtn.disabled = true;
        nextBtn.classList.add('step-btn-disabled');
    }, []);

    const enableNext = () => {
        const nextBtn = document.querySelector('.after-auth-next-btn');
        nextBtn.disabled = false;
        nextBtn.classList.remove('step-btn-disabled');
    }

    if (currentStep !== 1) return null;
    return (
        <div className="step-wrapper">
            <div className="step-header">Step 1</div>
            <div className="authorize-btn-wrapper">
                {/* <Link to='www.google.com'>Authorize link</Link> */}
                <a 
                    onClick={() => enableNext()} 
                    className="authorize-btn" 
                    href="https://sellercentral.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.a6ce15fc-0aa6-477a-b7bd-51ea48583bb0&version=beta" 
                    target="_blank">
                        Authorize
                </a>
            </div>
            <div className="step-ctrls">
                <button className="step-btn" onClick={() => prev()}>Previous</button>
                <button className="step-btn after-auth-next-btn" onClick={() => next()}>Next</button>
            </div>
        </div>
    )
}
