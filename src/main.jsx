import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainContent from './MainContent.jsx'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Home from './Pages/Home.jsx'
import Place from './Pages/PlacePage.jsx'

const apiUrl = import.meta.env.VITE_SUPABASE_URL; 
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(apiUrl, apiKey);

export default function Main(){
  const [foodPlaces, setFoodPlaces] = useState([]);
  const [drinkPlaces, setDrinkPlaces] = useState([]);
  const [activityPlaces, setActivityPlaces] = useState([]);
  const [celebrationPlaces, setCelebrationPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const foodData = await supabase.from('foodplaces').select();
      const drinkData = await supabase.from('drinkplaces').select();
      const activityData = await supabase.from('activityplaces').select();
      const celebrationData = await supabase.from('celebrationplaces').select();

      setFoodPlaces(foodData.data);
      setDrinkPlaces(drinkData.data);
      setActivityPlaces(activityData.data);
      setCelebrationPlaces(celebrationData.data);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path="food" element={<MainContent places={foodPlaces} />} />
        <Route path="drinks" element={<MainContent places={drinkPlaces} />} />
        <Route path="activities" element={<MainContent places={activityPlaces} />} />
        <Route path="celebrate" element={<MainContent places={celebrationPlaces} />} />
        <Route path="food/place/:placeId" element={<Place places={foodPlaces}/>} />
        <Route path="drinks/place/:placeId" element={<Place places={drinkPlaces}/>} />
        <Route path="activities/place/:placeId" element={<Place places={activityPlaces}/>} />
        <Route path="celebrate/place/:placeId" element={<Place places={celebrationPlaces}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
