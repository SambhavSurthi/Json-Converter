import React, { useState } from 'react';
import SuccessPopup from './SuccessPopup';

const JsonOutput = ({ jsonData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupAction, setPopupAction] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
    setPopupAction('copy');
    setShowPopup(true);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'questions.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setPopupAction('download');
    setShowPopup(true);
  };

  return (
    <div className="question-output-container">
      <div className="output-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Parsed Questions ({jsonData.length})</h2>
        <div className="button-group">
          <button
            onClick={handleCopy}
            className="btn btn-primary"
          >
            Copy All
          </button>
          <button
            onClick={handleDownload}
            className="btn btn-success"
          >
            Download All
          </button>
        </div>
      </div>
      <pre style={{ flex: 1, margin: 0, padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem', overflow: 'auto', fontFamily: 'monospace', fontSize: '0.875rem' }}>
        {JSON.stringify(jsonData, null, 2)}
      </pre>

      <SuccessPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
        action={popupAction} 
      />
    </div>
  );
};

export default JsonOutput; 