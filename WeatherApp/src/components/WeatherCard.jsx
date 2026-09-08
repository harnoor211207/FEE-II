function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if (code <= 3) return "🌤️";
  if (code <= 48) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "❄️";
  if (code <= 82) return "🌦️";
  if (code <= 99) return "⛈️";

  return "🌤️";
}

function WeatherCard({ date, maxTemp, minTemp, code }) {
  const day = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className="weather-card">
      <h3>{day}</h3>

      <div className="weather-icon">
        {getWeatherIcon(code)}
      </div>

      <p>
        {Math.round(maxTemp)}° / {Math.round(minTemp)}°
      </p>
    </div>
  );
}

export default WeatherCard;