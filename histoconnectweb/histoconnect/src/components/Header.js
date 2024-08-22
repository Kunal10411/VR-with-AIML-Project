import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function Header() {
  const [locationsAnchorEl, setLocationsAnchorEl] = useState(null);
  const [loginSignupAnchorEl, setLoginSignupAnchorEl] = useState(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrollingDown((prevScrollTop) => {
        return scrollTop < prevScrollTop ? false : true;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLocationsClick = (event) => {
    setLocationsAnchorEl(event.currentTarget);
  };

  const handleLocationsClose = () => {
    setLocationsAnchorEl(null);
  };

  const handleLoginSignupClick = (event) => {
    setLoginSignupAnchorEl(event.currentTarget);
  };

  const handleLoginSignupClose = () => {
    setLoginSignupAnchorEl(null);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: isScrollingDown ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
        transition: 'background-color 0.3s ease',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff' }}>
          HistoConnect
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Button color="inherit" component={Link} to="/" style={{ color: '#ffffff' }}>
          Home
        </Button>
        <Button
          color="inherit"
          aria-controls="locations-menu"
          aria-haspopup="true"
          onClick={handleLocationsClick}
          style={{ color: '#ffffff' }}
        >
          Locations
        </Button>
        <Menu
          id="locations-menu"
          anchorEl={locationsAnchorEl}
          open={Boolean(locationsAnchorEl)}
          onClose={handleLocationsClose}
        >
          <MenuItem onClick={handleLocationsClose} component={Link} to="/victoria-memorial">
            Victoria Memorial
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/charminar">
            Charminar
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/hampi">
            Hampi
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/mysore-palace">
            Mysore Palace
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/india-gate">
            India Gate
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/taj-mahal">
            Taj Mahal
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/qutub-minar">
            Qutub Minar
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/gol-gumbaz">
            Gol Gumbaz
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/jantar-mantar">
            Jantar Mantar
          </MenuItem>
          <MenuItem onClick={handleLocationsClose} component={Link} to="/nalanda-university">
            Nalanda University
          </MenuItem>
        </Menu>
        <Button color="inherit" component={Link} to="/contacts" style={{ color: '#ffffff' }}> {/* Add this line */}
          Contact {/* Change the text as needed */}
        </Button>
        <Button
          color="inherit"
          aria-controls="login-signup-menu"
          aria-haspopup="true"
          onClick={handleLoginSignupClick}
          style={{ color: '#ffffff' }}
        >
          Sign Up / Login
        </Button>
        <Menu
          id="login-signup-menu"
          anchorEl={loginSignupAnchorEl}
          open={Boolean(loginSignupAnchorEl)}
          onClose={handleLoginSignupClose}
        >
          <MenuItem onClick={handleLoginSignupClose} component={Link} to="/signup">
            Sign Up
          </MenuItem>
          <MenuItem onClick={handleLoginSignupClose} component={Link} to="/login">
            Login
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
