import { useState } from "react";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      // Find the city in India
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=10&language=en&format=json&countryCode=IN`
      );

      const locationData = await locationResponse.json();

      if (!locationData.results || locationData.results.length === 0) {
        throw new Error("City not found in India");
      }

      const location = locationData.results[0];

      // Get weather using latitude and longitude
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
      );

      const weatherData = await weatherResponse.json();

      setWeather({
        location,
        current: weatherData.current,
        daily: weatherData.daily,
      });
    } catch (err) {
      setWeather(null);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    searchWeather,
  };
}

export default useWeather;