import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import DependentsTable from './pages/DependentsTable';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
       
        <Route path="dependents" element={<DependentsTable/>} />
        {/* Add more child routes here */}
      </Route>
    </Routes>
  );
}

export default App;