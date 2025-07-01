// src/App.jsx
import React from 'react';
import Home from './components/Home';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;