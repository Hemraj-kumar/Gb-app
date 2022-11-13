import React from 'react';
import './style.css';
import './styles/app.css';

import Home from './components/Home.js';
import Header from './components/Header.js';

export default function App() {
  return (
    <div className="app">
      <Header className="app_header" />
      <Home className="app_body" />
    </div>
  );
}
