import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Grid, Chip, Typography } from '@mui/material';
import Dropdown from './Dropdown';
import PlaceCard from './PlaceCard';

function MainContent({places}) {
  const locationDropdownOptions = ["6PS", "CSG"]
  const distanceDropdownOptions = ["< 1km", "< 5km", "< 10km"]
  const partySizeDropdownOptions = ["Any", "Small (1-10 ppl)", "Medium (10-25 ppl)", "Large (25+ ppl)"]
  const availiabilityDropdownOptions  = ["Dine-in", "Private room available", "Outdoor seating"]
  const priceDropdownOptions = ["1: Inexpensive", "2: Moderate", "3: Expensive", "4: Very Expensive"]
  const dietaryRequirementsChipOptions = [
    { label: "Vegetarian", selected: false },
    { label: "Vegan", selected: false },
    { label: "Halal", selected: false },
  ];

  const [dropdown1, setDropdown1] = useState(locationDropdownOptions.at(0));
  const [dropdown2, setDropdown2] = useState(distanceDropdownOptions.at(0));
  const [dropdown3, setDropdown3] = useState(partySizeDropdownOptions.at(0));
  const [dropdown4, setDropdown4] = useState(availiabilityDropdownOptions.at(0));
  const [dropdown5, setDropdown5] = useState(priceDropdownOptions.at(0));
  const [dietaryRequirements, setDietaryRequirements] = useState(dietaryRequirementsChipOptions);

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

  const handleChange5 = (event) => {
    setDropdown5(event.target.value);
  };

  const handleChipClick = (index) => {
    const updatedRequirements = dietaryRequirements.map((item, idx) => {
      if (idx === index) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setDietaryRequirements(updatedRequirements);
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
          <Dropdown label="Availiability" value={dropdown4} onChange={handleChange4} options={availiabilityDropdownOptions} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Dropdown label="Price" value={dropdown5} onChange={handleChange5} options={priceDropdownOptions} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        {dietaryRequirements.map((item, index) => (
          <Chip
            key={item.label}
            label={item.label}
            color={item.selected ? 'primary' : 'default'}
            onClick={() => handleChipClick(index)}
          />
        ))}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {places.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <PlaceCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainContent;
