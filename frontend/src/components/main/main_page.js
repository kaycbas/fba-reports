import React, { useState, useEffect } from 'react';
import MasterForm from './form/master_form_container';

function MainPage() {
  const [started, setStarted] = useState(false);

  const renderWelcome = () => {
    if (started) return null;
    return (
      <div className="welcome-wrapper">
        <div className="welcome-header">Welcome</div>
        <div className="welcome-message">This app is designed to automate the building of your Amazon FBA P&L.</div>
        <div className="welcome-message">Please follow the instructions to connect your Seller Central account and provide the necessary ASIN and expense information.</div>
        <div onClick={() => setStarted(true)} className="welcome-begin-btn">Click to begin</div>
      </div>
    )
  }

  const renderMasterForm = () => {
    if (!started) return null;
    return <MasterForm setStarted={setStarted} />;
  }

  return (
    <div className='main-wrapper'>
      {renderWelcome()}
      {renderMasterForm()}
    </div>
  );
}

export default MainPage;