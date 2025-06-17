import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Introduction Section */}
      <section className="about-intro" style={{ padding: '2rem', maxWidth: '900px', margin: 'auto', textAlign: 'center' }}>
        <h2 style={{ color: '#b9975b', fontWeight: 'bold', fontSize: '2.5rem' }}>About Us</h2>
        <img
          src="https://img.freepik.com/premium-photo/bakery-decoration-pastel-color-theme-inspiration-ideas_1044173-3105.jpg"
          alt="About Us Illustration"
          style={{ maxWidth: '100%', height: 'auto', margin: '1rem 0' }}
        />
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
          Sweetify Bakery was established in 1995 with a passion for creating delightful baked goods.
          Over the years, we have grown into a beloved local bakery known for our quality, creativity,
          and commitment to customer satisfaction. Our mission is to bring sweet moments to every table.
        </p>
      </section>

      {/* Our Promise Section */}
      <section className="our-promise" style={{ backgroundColor: '#fff4e5', padding: '3rem 1rem', textAlign: 'center' }}>
        <h2 style={{ color: '#b9975b', fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem' }}>Our Promise</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '900px', margin: 'auto' }}>
          <div style={{ flex: '1 1 200px', margin: '1rem' }}>
            <img src="https://static.vecteezy.com/system/resources/previews/023/654/953/large_2x/cute-cartoon-kawaii-cupcake-sticker-clipart-ai-generated-free-png.png" alt="Authentic Recipes" style={{ height: '60px', marginBottom: '1rem' }} />
            <h3 style={{ color: '#b9975b', fontWeight: 'bold' }}>AUTHENTIC RECIPES</h3>
            <p>Our products are based on traditional home-style recipes, using fresh ingredients.</p>
          </div>
          <div style={{ flex: '1 1 200px', margin: '1rem' }}>
            <img src="https://i.etsystatic.com/50470297/r/il/a884d8/5834287133/il_fullxfull.5834287133_85yl.jpg" alt="Baked With Love" style={{ height: '60px', marginBottom: '1rem' }} />
            <h3 style={{ color: '#b9975b', fontWeight: 'bold' }}>BAKED WITH LOVE</h3>
            <p>Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</p>
          </div>
          <div style={{ flex: '1 1 200px', margin: '1rem' }}>
            <img src="https://th.bing.com/th/id/OIP.IrzAps5cTbhevqx-QCHCKQHaHa?rs=1&pid=ImgDetMain" alt="Honestly Priced" style={{ height: '60px', marginBottom: '1rem' }} />
            <h3 style={{ color: '#b9975b', fontWeight: 'bold' }}>HONESTLY PRICED</h3>
            <p>We constantly strive to offer the best products at the right prices.</p>
          </div>
          <div style={{ flex: '1 1 200px', margin: '1rem' }}>
            <img src="https://clipartcraft.com/images/birthday-cake-clipart-kawaii-3.png" alt="Committed to Quality" style={{ height: '60px', marginBottom: '1rem' }} />
            <h3 style={{ color: '#b9975b', fontWeight: 'bold' }}>COMMITTED TO QUALITY</h3>
            <p>From our ingredients to our kitchen operations & guest services, we always prioritize quality.</p>
          </div>
        </div>
      </section>

      {/* Like Our Products Section */}
      <section className="like-products" style={{ backgroundColor: '#e9f3ec', padding: '3rem 1rem', textAlign: 'center' }}>
        <h2 style={{ color: '#b9975b', fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>Like our products?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Treat yourself to your favourite Sweetify products or surprise your loved ones with an edible gift.
        </p>
        <button
          style={{
            backgroundColor: '#e6a78b',
            border: 'none',
            borderRadius: '20px',
            padding: '0.75rem 2rem',
            color: '#b9975b',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#d18a6a'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#e6a78b'}
          onClick={() => navigate('/home')}
        >
          ORDER ONLINE
        </button>
      </section>

      {/* Our Team Section */}
      <section className="our-team" style={{ backgroundColor: '#fff4e5', padding: '3rem 1rem', textAlign: 'center' }}>
        <h2 style={{ color: '#b9975b', fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem' }}>Our Team</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: 'auto' }}>
          <div style={{ flex: '1 1 250px', margin: '1rem', backgroundColor: 'white', padding: '1rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <img src="https://static.vecteezy.com/system/resources/previews/023/984/955/original/businessman-or-male-character-crossed-arms-pose-in-black-suit-half-body-cartoon-character-png.png" alt="Team Member 1" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ color: '#b9975b', marginTop: '1rem' }}>Abhishek</h3>
            <p>A qualified chartered accountant with a career spanning 16 years, Abhishek heads the finance function and is the co-owner at Sweetify.</p>
          </div>
          <div style={{ flex: '1 1 250px', margin: '1rem', backgroundColor: 'white', padding: '1rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <img src="https://static.vecteezy.com/system/resources/previews/023/984/963/original/black-businesswoman-or-american-african-female-character-crossed-arms-pose-in-black-suit-half-body-cartoon-character-png.png" alt="Team Member 2" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ color: '#b9975b', marginTop: '1rem' }}>Simran</h3>
            <p>Simran is the founder and co-owner of Sweetify. With over 17 years of experience, Simran handles online orders and overall working of delivery business. She is the brain behind our business and has an extraordinary vision. We hope to reach to as many customers as possible and expand our business overseas. </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
