import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!loggedInUser) {
      alert('Please login first');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div style={{ 
      padding: '1rem', 
      minHeight: '100vh', 
      color: 'white', 
      backgroundImage: 'url(https://wallpapercave.com/wp/wp8611834.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        borderRadius: '12px', 
        padding: '2rem', 
        width: '90%', 
        maxWidth: '700px', 
        color: '#333' 
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p style={{ color: '#333' }}>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {cartItems.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #ccc',
                    padding: '1rem 0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>
                      {product.name}
                    </span>
                  </div>
                  <div style={{ width: '100px', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
                    Rs {product.price.toLocaleString()}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      style={{
                        backgroundColor: '#ddd',
                        border: 'none',
                        color: '#333',
                        padding: '0.25rem 0.75rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                      }}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '20px', textAlign: 'center', color: '#333' }}>{quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      style={{
                        backgroundColor: '#ddd',
                        border: 'none',
                        color: '#333',
                        padding: '0.25rem 0.75rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#ff4d4d',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        marginLeft: '1rem',
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          <button
            onClick={handleCheckout}
            style={{
              marginTop: '2rem',
              padding: '0.75rem 2.5rem',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              backgroundColor: '#f0c14b',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              minWidth: '160px',
              height: '45px',
            }}
          >
            Checkout
          </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
