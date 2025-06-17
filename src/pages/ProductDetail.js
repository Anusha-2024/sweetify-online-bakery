import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: '1rem' }}>Product not found.</div>;
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      <h2>{product.name}</h2>
      <p>Rs {product.price.toFixed(2)}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
