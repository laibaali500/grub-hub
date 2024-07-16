import React from 'react';
import { Box, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import Dropdown from './Dropdown';
import PlaceCard from './PlaceCard';

function MainContent({places}) {
  const [dropdown1, setDropdown1] = React.useState('');
  const [dropdown2, setDropdown2] = React.useState('');
  const [dropdown3, setDropdown3] = React.useState('');
  const [dropdown4, setDropdown4] = React.useState('');

  const handleChange1 = (event) => {
    setDropdown1(event.target.value);
  };

  const handleChange2 = (event) => {
    setDropdown2(event.target.value);
  };

  const handleChange3 = (event) => {
    setDropdown3(event.target.value);
  };

  const handleChange4 = (event) => {
    setDropdown4(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            App Title
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Dropdown 1" value={dropdown1} onChange={handleChange1} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Dropdown 2" value={dropdown2} onChange={handleChange2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Dropdown 3" value={dropdown3} onChange={handleChange3} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Dropdown 4" value={dropdown4} onChange={handleChange4} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {places.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <PlaceCard item={item.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainContent;
