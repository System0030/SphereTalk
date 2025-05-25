// src/components/ReportModal.jsx
import React, { useState } from 'react';

const REPORT_REASONS = [
  'COPY RIGHT VIOLATION',
  'IMPERSONATION',
  'SPAM',
  'HARASSMENT',
  'HATE',
  'OTHER',
];

const ReportModal = ({ onClose, onSubmit }) => {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  const handleSubmit = () => {
    const reasonMessage = selectedReasons.length
      ? `You reported this post for: ${selectedReasons.join(', ')}.`
      : 'No reason selected.';

    const suggestion = selectedReasons.includes('SPAM') && selectedReasons.includes('HATE')
      ? 'This content may violate multiple community guidelines and has been flagged for review.'
      : selectedReasons.includes('HARASSMENT')
      ? 'Thanks for helping us make this space safer.'
      : selectedReasons.includes('IMPERSONATION')
      ? 'Impersonation reports are taken seriously — thank you.'
      : selectedReasons.includes('COPY RIGHT VIOLATION')
      ? 'We’ll investigate potential copyright violations promptly.'
      : selectedReasons.includes('OTHER')
      ? 'Thank you for reporting. We’ll review this.'
      : '';

    setMessage(`${reasonMessage} ${suggestion} Your report has been submitted.`);
    setSubmitted(true);
    if (onSubmit) onSubmit(selectedReasons);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black rounded-3xl p-6 w-80 flex flex-col items-center gap-4 border border-red-700 text-center">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-red-600 text-sm font-bold">SUBMIT REPORT</h3>
          <button onClick={onClose} className="text-red-500 text-lg font-bold">✕</button>
        </div>

        {!submitted ? (
          <>
            <p className="text-gray-300 text-xs">
              Thanks for looking out for yourself and your fellow redditors by reporting things
              that break the rules. Let us know what's happening, and we'll look into it.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {REPORT_REASONS.map((reason) => (
                <button
                  key={reason}
                  onClick={() => toggleReason(reason)}
                  className={`px-4 py-1 rounded-full border text-xs font-semibold tracking-wide
                    ${selectedReasons.includes(reason)
                      ? 'bg-red-600 text-white border-red-600'
                      : 'text-white border-red-600 hover:bg-white hover:text-red-600'}`}
                >
                  {reason}
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="mt-4 px-6 py-2 bg-red-600 text-red-600 rounded-full font-bold"
            >
              SEND
            </button>
          </>
        ) : (
          <p className="text-white text-sm mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ReportModal;
