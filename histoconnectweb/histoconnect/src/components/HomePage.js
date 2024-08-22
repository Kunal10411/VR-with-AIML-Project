import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './HomePage.css';

function HomePage() {
 return (
   <div className="home-page">
     <div className="overlay">
       <div className="content">
         <h1>Welcome to HistoConnect</h1>
         <p>
           HistoConnect is your gateway to immersive historical experiences.
           Explore ancient civilizations, iconic landmarks, and historical
           events like never before.
         </p>
         <Button
           variant="contained"
           color="primary"
           component={Link}
           to="/taj-mahal"
         >
           Start Exploring
         </Button>
         {/* Link to Victoria Memorial page */}
       </div>
     </div>
   </div>
 );
}

export default HomePage;