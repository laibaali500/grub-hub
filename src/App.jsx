import React from 'react';
import { CssBaseline, Drawer, Toolbar, Box, List, ListItem, ListItemText } from '@mui/material';
import MainContent from './MainContent';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './App.css'

const apiUrl = import.meta.env.VITE_SUPABASE_URL; 
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(apiUrl, apiKey);

const drawerWidth = 240;

function App() {
  const [foodPlaces, setFoodPlaces] = useState([]);

  useEffect(() => {
    getFoodPlaces();
  }, []);

  async function getFoodPlaces() {
    const { data } = await supabase.from("foodplaces").select();
    setFoodPlaces(data);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Item 1', 'Item 2', 'Item 3'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <MainContent places={foodPlaces} />
    </Box>
  );
}

export default App;
