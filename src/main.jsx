// main.jsx or App.jsx
import React from 'react'; // Add this line
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Wrap the App component with HashRouter */}
      <App />
    </Router>
  </React.StrictMode>
);
