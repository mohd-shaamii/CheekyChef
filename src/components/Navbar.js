import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#d70f43' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
          CHEEKY CHEF
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Add Search Input */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', pointerEvents: 'none', padding: '10px' }}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search recipes..."
              style={{ paddingLeft: '30px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.55)', borderRadius: '5px' }}
            />
          </div>
          {/* End of Search Input */}
          <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '10px' }}>
              <Button component={Link} to="/create" variant="contained" color="primary">
                Create Recipe
              </Button>
            </li>
            <li>
              <Button component={Link} to="/profile" variant="contained" color="secondary">
                Profile
              </Button>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
