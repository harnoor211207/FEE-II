function CurrentWeather({ weather, city }) {
  const current = weather.current;

  return (
    <section className="current-weather">
      <div className="location">
        <h2>{city}</h2>
        <p>{weather.location.country}</p>
      </div>

      <div className="temperature">
        {Math.round(current.temperature_2m)}°C
      </div>

      <div className="weather-info">
        <div>
          <span>🌡️</span>
          <p>Feels Like</p>
          <strong>
            {Math.round(current.apparent_temperature)}°C
          </strong>
        </div>

        <div>
          <span>💧</span>
          <p>Humidity</p>
          <strong>
            {current.relative_humidity_2m}%
          </strong>
        </div>

        <div>
          <span>💨</span>
          <p>Wind</p>
          <strong>
            {current.wind_speed_10m} km/h
          </strong>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;