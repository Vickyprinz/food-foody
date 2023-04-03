import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Cart from './components/Cart';
import Billing from './components/Billing';
import ResetPassword from './components/ResetPassword';

export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
{/* added routes */}
      <Routes>
        <Route path="/" element={< Signup />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}