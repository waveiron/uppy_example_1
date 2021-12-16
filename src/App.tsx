import Uppy from '@uppy/core';
import { Dashboard, useUppy } from '@uppy/react';
import React from 'react';
import './App.css';

function App() {
  const uppy = useUppy(() => {
    return new Uppy();
  });
  return (
    <Dashboard uppy={uppy}/>
  );
}

export default App;
