// Header.jsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleNavClick = (route) => {
    navigate(route);
    setIsDrawerOpen(false);
  };

  const renderLogoText = () => {
    if (isMobile) {
      return 'AURCM'; // Display "AURCM" on mobile
    } else {
      return 'Anna University Regional Campus Madurai'; // Display full text on laptop
    }
  };

  

  return (
    <div>
      <AppBar position="fixed" style={{ top: 0, zIndex: 100 }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              {renderLogoText()}
            </Link>
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={() => handleNavClick('/')}>
              <ListItemText primary="Department" />
            </ListItem>

            <ListItem button onClick={() => handleNavClick('/home')}>
              <ListItemText primary="CGPA Calculator" />
            </ListItem>

            <ListItem button onClick={() => handleNavClick('/cgpa')}>
              <ListItemText primary="GPA Calculator" />
            </ListItem>
            {/* Add more menu items as needed */}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
