import React from 'react';
import ContactBG from '../images/ContactBG.jpg';

function ContactsPage() {
  return (
    <div style={{
      backgroundImage: `url(${ContactBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '50px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px',
      }}>
        <h1>Contact Us:</h1>
        <p>
          <h2>HistoConnect</h2>
          Email: histoconnectnexus@gmail.com
        </p>
        <div style={{ marginTop: '20px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.4932080614528!2d77.61838343860246!3d13.036536509902286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1712ad70b57b%3A0xaaf769f544d13335!2sHKBK%20COLLEGE%20OF%20ENGINEERING%2C%20Nagawara%2C%20Bengaluru%2C%20Karnataka%20560045!5e0!3m2!1sen!2sin!4v1716929829643!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
