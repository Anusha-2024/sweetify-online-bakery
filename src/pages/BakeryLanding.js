import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const bakeryLogo = 'https://static.vecteezy.com/system/resources/previews/014/471/038/original/cake-icon-logo-design-vector.jpg'; // You need to add this logo image in assets folder or replace with your logo path

const BakeryLanding = () => {
  const navigate = useNavigate();
  const { users, loggedInUser, loginError, signupError, signup, login, logout, setLoginError, setSignupError } = useContext(AuthContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Removed event listeners for showing login/signup modals from Navbar buttons
  // since modals are now handled globally in App.js

  // Position state for draggable modals
  const [loginPos, setLoginPos] = useState({ x: window.innerWidth / 2 - 150, y: window.innerHeight / 2 - 150 });
  const [signupPos, setSignupPos] = useState({ x: window.innerWidth / 2 - 150, y: window.innerHeight / 2 - 150 });

  // Dragging state
  const [draggingLogin, setDraggingLogin] = useState(false);
  const [draggingSignup, setDraggingSignup] = useState(false);

  // Offset to keep cursor position relative to modal top-left during drag
  const loginOffset = useRef({ x: 0, y: 0 });
  const signupOffset = useRef({ x: 0, y: 0 });

  // Mouse move handler for dragging
  const handleMouseMove = (e) => {
    if (draggingLogin) {
      const newX = e.clientX - loginOffset.current.x;
      const newY = e.clientY - loginOffset.current.y;
      setLoginPos({ x: newX, y: newY });
    }
    if (draggingSignup) {
      const newX = e.clientX - signupOffset.current.x;
      const newY = e.clientY - signupOffset.current.y;
      setSignupPos({ x: newX, y: newY });
    }
  };

  // Mouse up handler to stop dragging
  const handleMouseUp = () => {
    setDraggingLogin(false);
    setDraggingSignup(false);
  };

  // Attach mousemove and mouseup listeners on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingLogin, draggingSignup]);

  // Mouse down handlers to start dragging and record offset
  const onLoginMouseDown = (e) => {
    e.preventDefault();
    setDraggingLogin(true);
    const rect = e.currentTarget.getBoundingClientRect();
    loginOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onSignupMouseDown = (e) => {
    e.preventDefault();
    setDraggingSignup(true);
    const rect = e.currentTarget.getBoundingClientRect();
    signupOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  // Handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setSignupError('');
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const success = signup({ email, password, confirmPassword });
    if (success) {
      setShowSignup(false);
      alert('Signup successful! You can now login.');
    }
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    const success = login({ email, password });
    if (success) {
      setShowLogin(false);
      alert(`Welcome back, ${email}! You are now logged in.`);
    }
  };

  const handleOrderNow = () => {
    navigate('/home');
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/08/38/79/51/1000_F_838795169_6V0nstmuEn6raI4CWR8ccKfjxmdUBONn.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',  // changed from white to light pink
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <header style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={bakeryLogo} alt="Bakery Logo" style={{ height: '50px', marginRight: '1rem' }} />
          <nav style={{ display: 'flex', gap: '1rem', fontWeight: 'bold', alignItems: 'center' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/home');
              }}
              style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}
            >
              Menu
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about-us');
              }}
              style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}
            >
              About Us
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}
            >
              Contact
            </a>
          </nav>
        </header>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to our bakery</h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
           Whipped dreams and layers of delight,<br />
           Cakes that glow like stars at night ✨<br />
           Baked with love, soft as a sigh,<br />
           At Sweetify, sweet moments never say goodbye❤️
        </p>
        <button
          onClick={handleOrderNow}
          style={{
            backgroundColor: '#f0c14b',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default BakeryLanding;
