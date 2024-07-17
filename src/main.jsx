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
import Place from './Pages/PlacePage.jsx'

const apiUrl = import.meta.env.VITE_SUPABASE_URL; 
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(apiUrl, apiKey);

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
        <Route path="place/:placeId" element={<Place places={foodPlaces}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
