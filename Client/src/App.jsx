import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import ManagePoll from './Pages/ManagePoll';
import ManageUser from './Pages/ManageUser';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={
          <div className='w-full h-auto min-h-fit grid grid-rows-layout'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Signin />} />
              <Route path='/home' element={<Home />} />
              <Route path='/manage-poll' element={<ManagePoll />} />
              <Route path='/manage-user' element={<ManageUser />} />
            </Routes>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Export App as default
