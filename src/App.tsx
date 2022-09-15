import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArticleSearch from './components/ArticleSearch';

function App() {
  return (
 <BrowserRouter>
    <div className="App">
     
      
 <Routes>
  <Route path='/' element={<ArticleSearch/>} >

  </Route>
 </Routes>
 
    </div>
 </BrowserRouter>
  );
}

export default App;
