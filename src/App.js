import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Context} from './context/Context';

// import pages
import Home from './pages/Home';
import Copyright from './components/copyright/Copyright';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound'

// import data
import data from './data.json';

function App() {
  return (
    <Context.Provider value={data}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Copyright />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
