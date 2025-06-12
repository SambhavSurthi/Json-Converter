import React from 'react';

const TextInput = ({ value, onChange }) => {
  return (
    <div className="text-input-wrapper">
      <label htmlFor="questionInput" className="block text-sm font-medium text-gray-700 mb-2">
        Paste your MCQ questions here:
      </label>
      <textarea
        id="questionInput"
        value={value}
        onChange={onChange}
        className="input resize-none"
        placeholder="Paste your questions here..."
      />
    </div>
  );
};

export default TextInput; 