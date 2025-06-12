import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#1f2937',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>JSON Converter</div>
      <button
        onClick={togglePopup}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontSize: '0.875rem'
        }}
      >
        Know About Format
      </button>

      {isPopupOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div ref={popupRef} style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            width: '80%',
            height: '80%',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
            <button
              onClick={togglePopup}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#4b5563'
              }}
            >
              ×
            </button>

            <h2 style={{ color: '#1f2937', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Question Format Guide</h2>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#374151', marginBottom: '1rem', fontSize: '1.25rem' }}>JSON Schema</h3>
              <pre style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.375rem',
                overflowX: 'auto',
                fontSize: '0.875rem',
                color: '#1f2937',
                border: '1px solid #e5e7eb'
              }}>
{`{
  "id": number,          // Unique identifier for the question
  "question": "string",  // The question text
  "type": "string",      // "single" for single choice, "multi" for multiple choice
  "options": [           // Array of possible answers
    "string",
    "string",
    ...
  ],
  "answer": "string"     // For single choice: the correct answer
  // OR
  "answer": [           // For multiple choice: array of correct answers
    "string",
    "string",
    ...
  ]
}`}</pre>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#374151', marginBottom: '1rem', fontSize: '1.25rem' }}>Input Format</h3>
              <pre style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.375rem',
                overflowX: 'auto',
                fontSize: '0.875rem',
                color: '#1f2937',
                border: '1px solid #e5e7eb'
              }}>
{`Q1. What is the capital of France?
A. London
B. Paris
C. Berlin
D. Madrid
Answer: B

Q2. Which of these are programming languages? (Select all that apply)
A. Python
B. Java
C. HTML
D. CSS
Answer: A B D`}</pre>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#374151', marginBottom: '1rem', fontSize: '1.25rem' }}>Single Choice Output Format</h3>
              <pre style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.375rem',
                overflowX: 'auto',
                fontSize: '0.875rem',
                color: '#1f2937',
                border: '1px solid #e5e7eb'
              }}>
{`{
  "id": 1,
  "question": "What is the capital of France?",
  "type": "single",
  "options": ["London", "Paris", "Berlin", "Madrid"],
  "answer": "Paris"
}`}</pre>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#374151', marginBottom: '1rem', fontSize: '1.25rem' }}>Multiple Choice Output Format</h3>
              <pre style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.375rem',
                overflowX: 'auto',
                fontSize: '0.875rem',
                color: '#1f2937',
                border: '1px solid #e5e7eb'
              }}>
{`{
  "id": 2,
  "question": "Which of these are programming languages? (Select all that apply)",
  "type": "multi",
  "options": ["Python", "Java", "HTML", "CSS"],
  "answer": ["Python", "Java", "CSS"]
}`}</pre>
            </div>

            <footer style={{
              marginTop: '2rem',
              paddingTop: '1rem',
              borderTop: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <p style={{ marginBottom: '1rem', color: '#374151', fontSize: '1.125rem', fontWeight: '500' }}>Developed by <b>Sambhav Surthi</b>✌️ </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <a href="https://linkedin.com/in/sambhavsurthi" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '1rem' }}>LinkedIn</a>
                <a href="https://github.com/SambhavSurthi" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '1rem' }}>GitHub</a>
                <a href="mailto:sambhavsurthi.career@outlook.com" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '1rem' }}>Email</a>
                <a href="tel:+916304749943" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '1rem' }}>Phone</a>
              </div>
            </footer>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 