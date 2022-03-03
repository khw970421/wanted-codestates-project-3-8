import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Lists from './pages/Lists';
import Main from './pages/Main';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<Lists />} />
      </Routes>
    </div>
  );
};

export default App;
