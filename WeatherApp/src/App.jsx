import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import useWeather from "./hooks/useWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  const {
    weather,
    loading,
    error,
    searchWeather
  } = useWeather();

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    searchWeather(searchCity);
  };

  return (
    <div className="app">

      <header className="header">
        <h1>🌤️ WeatherNow</h1>
        <p>Check the weather anywhere in the world</p>
      </header>

      <main className="container">

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="message">
            Loading weather...
          </div>
        )}

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="current-weather">
            <h2>Search for a city</h2>
            <p>Enter a city name above to check the weather.</p>
          </div>
        )}

        {weather && !loading && (
          <>
            <CurrentWeather
  weather={weather}
  city={city}
/>

            <Forecast
              weather={weather}
            />
          </>
        )}

      </main>
    </div>
  );
}

export default App;