function WeatherCard({ weather }) {
  const getWeatherInfo = (code) => {
    if (code === 0) {
      return { icon: "☀️", description: "Céu limpo" };
    }

    if ([1, 2].includes(code)) {
      return { icon: "🌤️", description: "Parcialmente nublado" };
    }

    if (code === 3) {
      return { icon: "☁️", description: "Nublado" };
    }

    if ([45, 48].includes(code)) {
      return { icon: "🌫️", description: "Neblina" };
    }

    if ([51, 53, 55, 56, 57].includes(code)) {
      return { icon: "🌦️", description: "Garoa" };
    }

    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
      return { icon: "🌧️", description: "Chuva" };
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
      return { icon: "❄️", description: "Neve" };
    }

    if ([95, 96, 99].includes(code)) {
      return { icon: "⛈️", description: "Tempestade" };
    }

    return { icon: "🌡️", description: "Condição variável" };
  };

  const climate = getWeatherInfo(weather.weather_code);

  return (
    <section className="weather-card">
      <div className="weather-top">
        <div>
          <p className="weather-label">CLIMA ATUAL</p>

          <h2>{weather.city}</h2>

          <p className="weather-date">
            {weather.time}
          </p>
        </div>

        <span className="weather-icon">
          {climate.icon}
        </span>
      </div>

      <div className="temperature">
        {Math.round(weather.temperature)}°
        <span>C</span>
      </div>

      <p className="weather-description">
        {climate.description}
      </p>

      <div className="weather-details">
        <div className="detail">
          <span>🌡️</span>
          <div>
            <p>Sensação térmica</p>
            <strong>
              {Math.round(weather.apparent_temperature)}°C
            </strong>
          </div>
        </div>

        <div className="detail">
          <span>💧</span>
          <div>
            <p>Umidade do ar</p>
            <strong>
              {weather.humidity}%
            </strong>
          </div>
        </div>

        <div className="detail">
          <span>💨</span>
          <div>
            <p>Velocidade do vento</p>
            <strong>
              {weather.wind_speed} km/h
            </strong>
          </div>
        </div>

        <div className="detail">
          <span>🌧️</span>
          <div>
            <p>Precipitação</p>
            <strong>
              {weather.precipitation} mm
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;