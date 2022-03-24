import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Layout } from './components/Layout';
import App from './App';
import { Animals } from './components/Animals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Animal } from './components/Animal';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App/>}/>
          <Route path='/animals' element={<Animals/>}></Route>
          <Route path='/animal/:id' element={<Animal/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
