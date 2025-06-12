import React, { useEffect } from 'react';

const SuccessPopup = ({ isOpen, onClose, action }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 1090,
        animation: 'fadeIn 0.3s ease-out'
      }} />
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        zIndex: 1100,
        width: '300px',
        textAlign: 'center',
        animation: 'slideIn 0.3s ease-out'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: 'scaleIn 0.5s ease-out' }}
          >
            <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" />
            <path
              d="M8 12L11 15L16 9"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: 'drawLine 0.5s ease-out' }}
            />
          </svg>
        </div>

        <h3 style={{ 
          color: '#1f2937', 
          fontSize: '1.25rem', 
          marginBottom: '0.5rem',
          animation: 'fadeIn 0.5s ease-out'
        }}>
          {action === 'copy' ? 'Copied to Clipboard!' : 'Download Complete!'}
        </h3>

        <p style={{ 
          color: '#6b7280', 
          marginBottom: '1.5rem',
          animation: 'fadeIn 0.5s ease-out 0.2s'
        }}>
          {action === 'copy' 
            ? 'The JSON has been copied to your clipboard.' 
            : 'The JSON file has been downloaded successfully.'}
        </p>

        <footer style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '1rem',
          animation: 'fadeIn 0.5s ease-out 0.4s'
        }}>
          <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '0.875rem' }}>
            Developed by <b>Sambhav Surthi</b>✌️
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="https://linkedin.com/in/sambhavsurthi" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.875rem' }}>LinkedIn</a>
            <a href="https://github.com/SambhavSurthi" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.875rem' }}>GitHub</a>
            <a href="mailto:sambhavsurthi.career@outlook.com" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.875rem' }}>Email</a>
          </div>
        </footer>

        <style>
          {`
            @keyframes slideIn {
              from {
                transform: translate(-50%, -60%);
                opacity: 0;
              }
              to {
                transform: translate(-50%, -50%);
                opacity: 1;
              }
            }

            @keyframes scaleIn {
              from {
                transform: scale(0);
              }
              to {
                transform: scale(1);
              }
            }

            @keyframes drawLine {
              from {
                stroke-dasharray: 100;
                stroke-dashoffset: 100;
              }
              to {
                stroke-dasharray: 100;
                stroke-dashoffset: 0;
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default SuccessPopup; 