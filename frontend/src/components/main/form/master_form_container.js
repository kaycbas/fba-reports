import React, { useState, useEffect } from 'react'
import Step1 from './step1'
import Step2 from './step2'

function MasterForm({ setStarted }) {
    const [currentStep, setCurrentStep] = useState(1);

    const next = () => {
        if (currentStep < 2) setCurrentStep(currentStep+1);
    }

    const prev = () => {
        if (currentStep > 1) { 
            setCurrentStep(currentStep-1);
        } else {
            setStarted(false);
        }
    }

    return (
        <div className='form-wrapper'>
            <Step1 currentStep={currentStep} next={next} prev={prev} />
            <Step2 currentStep={currentStep} next={next} prev={prev} />
        </div>
    );
}

export default MasterForm;