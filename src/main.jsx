import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Food from './Pages/FoodPage.jsx'
import MainContent from './MainContent.jsx'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Activities from './Pages/ActivitiesPage.jsx'
import Events from './Pages/EventsPage.jsx'

const supabase = createClient("https://hzdomlyyawwtdzjwyuhm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6ZG9tbHl5YXd3dGR6and5dWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDkyMzIsImV4cCI6MjAzNjYyNTIzMn0.6cRGc98kbTT2DxeI_qG-K7iRf6Uw2WeTaPtgqRXFQqk");

export default function Main(){
  const [foodPlaces, setFoodPlaces] = useState([]);

  useEffect(() => {
    getFoodPlaces();
  }, []);

  async function getFoodPlaces() {
    const { data } = await supabase.from("foodplaces").select();
    setFoodPlaces(data);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/' element={<MainContent places={foodPlaces} />} />
        <Route path="food" element={<Food />} />
        <Route path="activities" element={<Activities />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
