import React from 'react';
import './App.css';
import { AnimalApi } from './api/AnimalApi';

function App() {
  AnimalApi();

  return(
    <div>
      <h1>En jätteflashig startsida!</h1>
    </div>
  )
}

export default App;
