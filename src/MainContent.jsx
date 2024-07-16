import React from 'react';
import { Box, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import Dropdown from './Dropdown';
import PlaceCard from './PlaceCard';

function MainContent({places}) {
  const locationDropdownOptions = ["6PS", "CSG"]
  const distanceDropdownOptions = ["< 1km", "< 5km", "< 10km"]
  const partySizeDropdownOptions = ["Any", "Small (1-10 ppl)", "Medium (10-25 ppl)", "Large (25+ ppl)"]
  const dietaryRequirementsDropdownOptions = ["None", "Vegetarian", "Vegan", "Halal"]

  const [dropdown1, setDropdown1] = React.useState(locationDropdownOptions.at(0));
  const [dropdown2, setDropdown2] = React.useState(distanceDropdownOptions.at(0));
  const [dropdown3, setDropdown3] = React.useState(partySizeDropdownOptions.at(0));
  const [dropdown4, setDropdown4] = React.useState(dietaryRequirementsDropdownOptions.at(0));

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
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Location" value={dropdown1} onChange={handleChange1} options={locationDropdownOptions} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Distance" value={dropdown2} onChange={handleChange2} options={distanceDropdownOptions} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Party Size" value={dropdown3} onChange={handleChange3} options={partySizeDropdownOptions} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Dietary Requirements" value={dropdown4} onChange={handleChange4} options={dietaryRequirementsDropdownOptions} />
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
