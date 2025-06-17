import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '1rem', margin: '1rem', width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '320px' }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
        <h3>{product.name}</h3>
        <p>Rs {product.price.toFixed(2)}</p>
      </Link>
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        style={{ marginTop: 'auto', padding: '0.5rem', backgroundColor: '#f0c14b', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Add to Cart
      </button>
      {showMessage && (
        <div style={{ marginTop: '0.5rem', color: 'green', fontWeight: 'bold' }}>
          Added {product.name} to cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
