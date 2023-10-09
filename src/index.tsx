import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RuneMasteryLoadoutTalentCalculator from './RuneMasteryLoadoutTalentCalculator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RuneMasteryLoadoutTalentCalculator  />
  </React.StrictMode>
);
