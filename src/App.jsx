import React from 'react';
import { CssBaseline, Drawer, Toolbar, Box, List, ListItem, ListItemText, AppBar, Typography, } from '@mui/material';
import MainContent from './MainContent';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './App.css'
import { Outlet, Link, useLocation } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_SUPABASE_URL; 
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(apiUrl, apiKey);

const drawerWidth = 240;

function App() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>GrubHub</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
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
          <nav>
              <ul>
                <Link to="/food">Food</Link> <br/>
                <Link to ="/activities">Activities</Link> <br/>
                <Link to="/events">Events</Link> <br/>
              </ul>
          </nav>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
