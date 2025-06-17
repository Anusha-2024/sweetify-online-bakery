import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const deliveryCharge = 10;
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + deliveryCharge;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Here you can add order processing logic if needed
    navigate('/order-success');
  };

  return (
    <div style={{ 
      padding: '1rem', 
      minHeight: '100vh', 
      backgroundImage: 'url(https://wallpapercave.com/wp/wp8611834.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: '16px', 
        padding: '2.5rem', 
        width: '90%', 
        maxWidth: '700px', 
        color: '#333',
        boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <h2 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '2rem', borderBottom: '2px solid #f0c14b', paddingBottom: '0.5rem' }}>Checkout</h2>
        <h3 style={{ fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem' }}>Order Summary</h3>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1rem' }}>
          {cartItems.map(({ product, quantity }) => (
            <li key={product.id} style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>
              {product.name} x {quantity} - <strong>Rs {product.price.toFixed(2)}</strong>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Delivery Charge: <strong>Rs {deliveryCharge.toFixed(2)}</strong>
        </p>
        <h3 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          Total: Rs {total.toFixed(2)}
        </h3>
        <h3 style={{ fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem' }}>Payment Options</h3>
        <form onSubmit={handlePlaceOrder}>
          <div style={{ marginBottom: '0.75rem' }}>
            <input type="radio" id="credit" name="payment" value="credit" defaultChecked />
            <label htmlFor="credit" style={{ marginLeft: '0.5rem', fontSize: '1rem' }}>Credit Card</label>
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <input type="radio" id="debit" name="payment" value="debit" />
            <label htmlFor="debit" style={{ marginLeft: '0.5rem', fontSize: '1rem' }}>Debit Card</label>
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <input type="radio" id="netbanking" name="payment" value="netbanking" />
            <label htmlFor="netbanking" style={{ marginLeft: '0.5rem', fontSize: '1rem' }}>Net Banking</label>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <input type="radio" id="cod" name="payment" value="cod" />
            <label htmlFor="cod" style={{ marginLeft: '0.5rem', fontSize: '1rem' }}>Cash on Delivery</label>
          </div>
          <button type="submit" style={{ 
            padding: '0.75rem 2.5rem', 
            cursor: 'pointer', 
            backgroundColor: '#f0c14b', 
            border: 'none', 
            borderRadius: '6px', 
            fontWeight: '700', 
            fontSize: '1.1rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'background-color 0.3s ease',
            minWidth: '160px',
            height: '45px',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#ddb347'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#f0c14b'}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
