import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lists from './pages/Lists';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<Lists />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
