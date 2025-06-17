import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const OrderSuccess = () => {
  const { cartItems } = useContext(CartContext);
  const [timer, setTimer] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    if (timer === 0) return;
    const countdown = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(countdown);
  }, [timer]);

  // Format timer as HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div style={{
      padding: '2rem',
      minHeight: '100vh',
      backgroundImage: 'url(https://wallpapercave.com/wp/wp8611834.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#333',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '16px',
        padding: '3rem',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#f0c14b', marginRight: '1rem' }}>Order Successful!</h1>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
              <path d="M20.285 6.709l-11.39 11.39-5.285-5.285 1.414-1.414 3.871 3.871 9.976-9.976z"/>
            </svg>
          </div>
        </div>

        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Estimated Delivery Time: </strong>
          <span>{timer > 0 ? formatTime(timer) : 'Arriving shortly!'}</span>
        </div>

        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h3>Order Summary:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map(({ product, quantity }) => (
              <li key={product.id} style={{ marginBottom: '0.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '1rem', borderRadius: '8px' }} />
                <span>{product.name} x {quantity} - Rs {product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div style={{ fontWeight: '700', fontSize: '1.2rem', marginTop: '1rem' }}>
            Total Amount: Rs {cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
          </div>
        </div>

        <button
          onClick={() => window.location.href = '/'}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            backgroundColor: '#f0c14b',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'background-color 0.3s ease',
            marginTop: '2rem',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#ddb347'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#f0c14b'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
