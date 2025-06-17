import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginModal = ({ onClose }) => {
  const { login, loginError, setLoginError } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    const success = login({ email, password });
    if (success) {
      onClose();
    }
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <h2>Login</h2>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button type="submit" style={buttonStyle}>Login</button>
            <button type="button" onClick={onClose} style={{ ...buttonStyle, marginLeft: '1rem', backgroundColor: '#ccc' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '8px',
  width: '300px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  marginTop: '0.25rem',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#f0c14b',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default LoginModal;
