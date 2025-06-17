import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
