import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lists from './pages/Lists';
import Main from './pages/Main';
import { useSelector } from 'react-redux';
import NotificationMessage from './components/NotificationMessage';

const App = () => {
  const state = useSelector(state => state.notificationReducer.notification);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<Lists />} />
      </Routes>
      <NotificationMessage state={state} />
    </BrowserRouter>
  );
};

export default App;
