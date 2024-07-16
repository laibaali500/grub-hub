import React from 'react';
import { CssBaseline, Drawer, Toolbar, Box, List, ListItem, ListItemText } from '@mui/material';
import MainContent from './MainContent';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './App.css'

const supabase = createClient("https://hzdomlyyawwtdzjwyuhm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6ZG9tbHl5YXd3dGR6and5dWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDkyMzIsImV4cCI6MjAzNjYyNTIzMn0.6cRGc98kbTT2DxeI_qG-K7iRf6Uw2WeTaPtgqRXFQqk");

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
