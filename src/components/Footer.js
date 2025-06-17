import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#ffffff',
      textAlign: 'center',
      padding: '15px 0',
      position: 'relative',
      bottom: 0,
      width: '100%',
      fontSize: '14px',
      fontFamily: 'Arial, sans-serif'
    }}>
      &copy; {currentYear} <strong>Sweetify</strong> 🍰 — Developed by <strong>Anusha</strong>. All rights reserved.
    </footer>
  );
};

export default Footer;
