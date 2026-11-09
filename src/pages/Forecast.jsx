
import { useEffect, useState } from "react";


function Forecast({ onNavigate, activePage }) {
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getForecast() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=7"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar previsão");
        }

        const data = await response.json();

        const formattedDays = data.daily.time.map((date, index) => ({
          date,
          max: data.daily.temperature_2m_max[index],
          min: data.daily.temperature_2m_min[index],
          rain: data.daily.precipitation_probability_max[index],
          code: data.daily.weather_code[index]
        }));

        setDays(formattedDays);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getForecast();
  }, []);

  function getIcon(code) {
    if (code === 0) return "☀️";
    if ([1, 2].includes(code)) return "🌤️";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
    if ([61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌡️";
  }

  function getDay(date, index) {
    if (index === 0) return "Hoje";

    return new Date(date + "T12:00:00").toLocaleDateString(
      "pt-BR",
      { weekday: "long" }
    );
  }

  return (
    <div className="app">


      <main className="main-content">

        <div className="page-heading">
          <span>PREVISÃO METEOROLÓGICA</span>
          <h2>Próximos <strong>7 dias.</strong></h2>
          <p>Acompanhe as condições do tempo em São Paulo.</p>
        </div>

        {loading && (
          <div className="message">
            <div className="loader"></div>
            Carregando previsão...
          </div>
        )}

        {!loading && days.length > 0 && (
          <div className="forecast-list">
            {days.map((day, index) => (
              <div className="forecast-item" key={day.date}>
                <div className="forecast-day">
                  <strong>{getDay(day.date, index)}</strong>
                  <small>
                    {new Date(day.date + "T12:00:00").toLocaleDateString(
                      "pt-BR",
                      { day: "2-digit", month: "short" }
                    )}
                  </small>
                </div>

                <span className="forecast-icon">
                  {getIcon(day.code)}
                </span>

                <div className="forecast-rain">
                  💧 {day.rain ?? 0}%
                </div>

                <div className="forecast-temperatures">
                  <strong>{Math.round(day.max)}°</strong>
                  <span>{Math.round(day.min)}°</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && days.length === 0 && (
          <div className="error-message">
            Não foi possível carregar a previsão.
          </div>
        )}

      </main>

      <footer>
        © 2026 CLIMATECH  · Dados Open-Meteo
      </footer>
    </div>
  );
}

export default Forecast;
