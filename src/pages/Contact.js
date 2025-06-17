import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto', backgroundColor: '#e9f3ec', display: 'flex', gap: '2rem' }}>
      {/* Left: Form */}
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#b9975b', textAlign: 'center' }}>Contact Us</h2>
        <p style={{ textAlign: 'center' }}>We would love to hear from you. Share your thoughts and queries with us!</p>
        <form>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="contactNo">Contact no. *</label>
              <input type="tel" id="contactNo" name="contactNo" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="email">Email ID *</label>
              <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="city">City *</label>
              <input type="text" id="city" name="city" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="subject">Subject *</label>
            <select id="subject" name="subject" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="" disabled selected>Choose your subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Order Issue">Order Issue</option>
              <option value="Product Feedback">Product Feedback</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}></textarea>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="file">Attach Files</label>
            <input type="file" id="file" name="file" accept=".jpg,.jpeg,.png,.pdf" style={{ width: '100%' }} />
            <small>Note : We accept file sizes up to 1mb and in a jpeg, png or pdf format.</small>
          </div>
          <button type="submit" style={{ backgroundColor: '#b9975b', color: 'white', padding: '0.5rem 1.5rem', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background-color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#a07f4a'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#b9975b'}>SUBMIT</button>
        </form>
      </div>

      {/* Right: Contact Details */}
      <div style={{ flex: 1, borderLeft: '1px solid #b9975b', paddingLeft: '2rem', color: '#b9975b', fontSize: '0.9rem' }}>
        <img src="https://th.bing.com/th/id/OIP.sTRA8n3ZJbuPbwjNTRIeKAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Contact Illustration" style={{ display: 'block', margin: '0 auto 1rem auto', maxWidth: '150px' }} />
        <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Sweetify Private Limited</h3>
        <p><strong>Registered Address:</strong><br />
          1234 Baker Street, Suite 567,<br />
          Sweetify City, CA 90210,<br />
          United States
        </p>
        <p><strong>Grievance & Nodal Officer:</strong><br />
          Ms. Simran,<br />
          Founder & Co-owner
        </p>
        <p><strong>Contact Details:</strong><br />
          <span role="img" aria-label="phone">📞</span> +1 (555) 123-4567<br />
          <span role="img" aria-label="email">✉️</span> contact@sweetify.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
