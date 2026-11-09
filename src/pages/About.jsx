
import Header from "../Components/Header";

function About({ onNavigate, activePage }) {
  return (
    <div className="app">
      <Header
        onNavigate={onNavigate}
        activePage={activePage}
      />

      <main className="main-content about-content">

        <div className="page-heading">
          <span>CONHEÇA NOSSO PROJETO</span>
          <h2>Sobre o <strong>Clima Tech.</strong></h2>
          <p>
            Tecnologia e informação para você acompanhar
            o clima em qualquer lugar.
          </p>
        </div>

        <section className="about-card">
          <div className="about-icon">🌤️</div>

          <h2>O que é o Clima Tech?</h2>

          <p>
            O Clima Tech é uma plataforma de previsão
            meteorológica desenvolvida para apresentar
            informações climáticas de maneira simples,
            rápida e moderna.
          </p>
        </section>

        <div className="about-grid">
          <div className="about-item">
            <span>⚛️</span>
            <h3>React</h3>
            <p>Interface construída com componentes React.</p>
          </div>

          <div className="about-item">
            <span>🎨</span>
            <h3>CSS</h3>
            <p>Design moderno e adaptável a diferentes telas.</p>
          </div>

          <div className="about-item">
            <span>🌍</span>
            <h3>Open-Meteo</h3>
            <p>Dados meteorológicos através de uma API gratuita.</p>
          </div>
        </div>

        <button
          className="back-button"
          onClick={() => onNavigate("home")}
        >
          ← Voltar ao início
        </button>

      </main>

      <footer>
        © 2026 Clima Tech · Desenvolvido com React
      </footer>
    </div>
  );
}

export default About;
