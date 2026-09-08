import WeatherCard from "./WeatherCard";

function Forecast({ weather }) {
  const dates = weather.daily.time;
  const maxTemps = weather.daily.temperature_2m_max;
  const minTemps = weather.daily.temperature_2m_min;
  const codes = weather.daily.weather_code;

  return (
    <section className="forecast">
      <h2>7-Day Forecast</h2>

      <div className="forecast-grid">
        {dates.map((date, index) => (
          <WeatherCard
            key={date}
            date={date}
            maxTemp={maxTemps[index]}
            minTemp={minTemps[index]}
            code={codes[index]}
          />
        ))}
      </div>
    </section>
  );
}

export default Forecast;