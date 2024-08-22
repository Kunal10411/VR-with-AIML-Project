import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

import ContactBG from '../images/ContactBG.jpg'; // Import the background image

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your backend API
      const response = await axios.post('/api/users/login', formData);
      console.log('Login successful:', response.data);
      // Optionally, you can redirect to another page upon successful login
      // history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login failure (e.g., show error message to user)
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      backgroundImage: `url(${ContactBG})`, // Set background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    }}>
      <div style={{
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px',
        backgroundColor: '#ffffff', // Set background color of login form to white
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
        <form onSubmit={handleSubmit}> {/* Call handleSubmit on form submit */}
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Email Address:</label>
            <input type="email" id="email" name="email" style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }} value={formData.email} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Password:</label>
            <input type="password" id="password" name="password" style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }} value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Submit</button>
        </form>
        <p style={{ marginTop: '15px', color: '#777' }}>Don't have an account? <Link to="/signup" style={{ color: '#000000' }}>Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
