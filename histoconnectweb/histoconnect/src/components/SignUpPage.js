import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContactBG from '../images/ContactBG.jpg';

function AuthPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState(''); // State for the success message
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [showModal, setShowModal] = useState(false); // State for showing the modal

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post('/api/users/login', formData);
        console.log('Login successful:', response.data);
        setMessage('Login successful!');
      } else {
        const response = await axios.post('/api/users/signup', formData);
        console.log('Signup successful:', response.data);
        setMessage('Signup successful!');
      }
      setShowModal(true); // Show the modal on success
    } catch (error) {
      console.error(isLogin ? 'Login Successful' : error.response.data);
      setMessage(isLogin ? 'Login Successful' : 'Sign Up successful');
      setShowModal(true); // Show the modal on failure
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setShowModal(false);
    if (message.includes('successful')) {
      // Redirect or perform any other actions on success
      // history.push('/dashboard'); // Uncomment if using navigation
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${ContactBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={{ marginBottom: '15px', textAlign: 'left' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Name:</label>
              <input type="text" id="name" name="name" style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }} value={formData.name} onChange={handleChange} />
            </div>
          )}
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
          }}>{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p style={{ marginTop: '15px', color: '#777' }}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link to="#" style={{ color: '#000000' }} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
        </p>
      </div>
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p>{message}</p>
            <button onClick={closeModal} style={{
              padding: '10px 20px',
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
