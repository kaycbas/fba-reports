import React, { useState, useEffect } from 'react';
import MasterForm from './form/master_form_container';

function MainPage() {
  const [started, setStarted] = useState('');

  const renderWelcome = () => {
    // conditional
    return <div>Welcome, click start to begin.</div>
  }

  const renderMasterForm = () => {

  }

  return (
    <div className='main-wrapper'>
      <MasterForm />
    </div>
  );
}

export default MainPage;