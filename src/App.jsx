import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './App.css'

const supabase = createClient("https://hzdomlyyawwtdzjwyuhm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6ZG9tbHl5YXd3dGR6and5dWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDkyMzIsImV4cCI6MjAzNjYyNTIzMn0.6cRGc98kbTT2DxeI_qG-K7iRf6Uw2WeTaPtgqRXFQqk");
// const supabase = createClient(process.env.REACT_APP_VITE_SUPABASE_URL, process.env.REACT_APP_VITE_SUPABASE_ANON_KEY);

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
    <ul>
      {foodPlaces.map((foodPlace) => (
        <li key={foodPlace.name}>{foodPlace.name}</li>
      ))}
    </ul>
  );
}

export default App;
