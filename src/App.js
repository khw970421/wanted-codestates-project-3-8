import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lists from './pages/Lists';
import Main from './pages/Main';
import NotificationMessage from './components/NotificationMessage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<Lists />} />
      </Routes>
      <NotificationMessage />
    </BrowserRouter>
  );
};

export default App;
