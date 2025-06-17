import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import BakeryLanding from './pages/BakeryLanding';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const handleShowLogin = () => setShowLogin(true);
    const handleShowSignup = () => setShowSignup(true);

    window.addEventListener('showLogin', handleShowLogin);
    window.addEventListener('showSignup', handleShowSignup);

    return () => {
      window.removeEventListener('showLogin', handleShowLogin);
      window.removeEventListener('showSignup', handleShowSignup);
    };
  }, []);

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<BakeryLanding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
      <Footer />
    </AuthProvider>
  );
}

export default App;
