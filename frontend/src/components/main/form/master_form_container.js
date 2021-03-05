import React, { useState, useEffect } from 'react'
import Step1 from './step1'
import Step2 from './step2'

function MasterForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const next = () => {
        // conditional logic so it doesn't go too high
        setCurrentStep(currentStep+1);
    }

    const prev = () => {
        if (currentStep > 0) setCurrentStep(currentStep-1);
    }

    return (
        <div className='form-wrapper'>
            <div>This is the master form.</div>
            <Step1 currentStep={currentStep} next={next} prev={prev} />
            <Step2 currentStep={currentStep} next={next} prev={prev} />
        </div>
    );
}

export default MasterForm;