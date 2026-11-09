import { useState, useEffect } from "react";

import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchWeather(cityName) {
    if (!cityName.trim()) {
      setError("Digite o nome de uma cidade.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      setWeather(null);

      // Buscar as coordenadas da cidade
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=pt&format=json`
      );

      if (!geoResponse.ok) {
        throw new Error("Erro ao pesquisar a cidade.");
      }

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("Cidade não encontrada.");
      }

      const location = geoData.results[0];

      // Buscar o clima pelas coordenadas
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`
      );

      if (!weatherResponse.ok) {
        throw new Error("Não foi possível obter o clima.");
      }

      const weatherData = await weatherResponse.json();

      const current = weatherData.current;

      // Organizar as informações
      setWeather({
        city: location.name,
        temperature: current.temperature_2m,
        apparent_temperature: current.apparent_temperature,
        humidity: current.relative_humidity_2m,
        wind_speed: current.wind_speed_10m,
        precipitation: current.precipitation,
        weather_code: current.weather_code,
        time: new Date(
          current.time
        ).toLocaleString("pt-BR", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: weatherData.timezone
        })
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Carregar uma cidade quando o site abrir
  useEffect(() => {
    searchWeather("São Paulo");
  }, []);

  function handleSearch(event) {
    event.preventDefault();

    searchWeather(city);
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">

        <div className="welcome">
          <span>PREVISÃO METEOROLÓGICA</span>

          <h2>
            Descubra o clima
            <br />
            <span>da sua cidade.</span>
          </h2>

          <p>
            Consulte as condições climáticas de qualquer
            lugar do mundo em poucos segundos.
          </p>
        </div>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
          loading={loading}
        />

        {loading && (
          <div className="message">
            <div className="loader"></div>
            <p>Buscando informações climáticas...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {weather && !loading && (
          <WeatherCard weather={weather} />
        )}

      </main>

      <footer>
        <p>
          © 2026 Clima Tech · Dados meteorológicos por Open-Meteo
        </p>
      </footer>
    </div>
  );
}

export default Home;