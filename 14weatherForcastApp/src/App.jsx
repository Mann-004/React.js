import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

const API_KEY = '2507eee01ebf47f6b5c114817251106'; 

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no`
    );
    const data = await res.json();
    if (res.ok) setWeather(data);
    else alert(data.error.message);
  };

  const isDay = weather?.current?.is_day;

  return (
    <div
      className={`min-h-screen p-6 flex flex-col items-center ${
        isDay ? "bg-day" : "bg-night"
      }`}
    >
      <h1 className="text-3xl font-bold text-white mb-4">Weather Forecast</h1>
      <div className="flex gap-2 mb-6">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-4 py-2 rounded text-black"
        />
        <button
          onClick={getWeather}
          className="px-4 py-2 bg-white rounded text-black"
        >
          Search
        </button>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
