import React from 'react';

const ProgressBar = ({ step }) => {
  const steps = ['Personal Details', 'Educational Details', 'Address Details', 'Preview'];
  const progress = (step / (steps.length - 1)) * 100;

  return (
    <div style={{ backgroundColor: 'purple', height: '20px', width: 'calc(100% - 700px)', borderRadius: '5px', overflow: 'hidden', margin: '20px auto', padding: '5px' }}>
      <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'white' }} />
    </div>
  );
};

export default ProgressBar;
