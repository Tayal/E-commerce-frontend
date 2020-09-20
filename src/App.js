import React from 'react';
import './App.css';
import Store from './components/Store';
import Router from './components/Router';


function App() {
  return (
    <Store>
      <Router />
    </Store>
  );
}

export default App;
