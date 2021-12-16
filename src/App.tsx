import Uppy from '@uppy/core';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
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
