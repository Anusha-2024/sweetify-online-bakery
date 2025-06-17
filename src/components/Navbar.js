import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#232f3e', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Sweetify🍰
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', position: 'relative' }}>
          🛒
          {cartItems.length > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: 'red',
                borderRadius: '50%',
                color: 'white',
                padding: '2px 6px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                minWidth: '20px',
                textAlign: 'center',
                lineHeight: '1'
              }}
            >
              {cartItems.length}
            </span>
          )}
        </Link>
        {!loggedInUser && (
          <>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showLogin'))}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              Login
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showSignup'))}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              Signup
            </button>
          </>
        )}
        {loggedInUser && (
          <>
            <div
              title={loggedInUser.email}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#f0c14b',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: '#333',
                cursor: 'default',
                userSelect: 'none',
              }}
            >
              {loggedInUser.email.charAt(0).toUpperCase()}
            </div>
            <button
              onClick={logout}
              style={{
                backgroundColor: '#f0c14b',
                border: 'none',
                padding: '0.25rem 0.75rem',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
