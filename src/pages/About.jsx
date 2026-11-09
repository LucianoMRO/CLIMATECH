import Header from "../Components/Header";
function About() {
  return (
    <main className="main-content about-content">

      <div className="page-heading">
        <span>CONHEÇA NOSSO PROJETO</span>

        <h2>
          Sobre o <strong> CLIMATECH </strong>
        </h2>

        <p>
          Tecnologia e informação para você acompanhar
          o clima em qualquer lugar.
        </p>
      </div>

      <section className="about-card">

        <div className="about-icon">🌤️</div>

        <h2>O que é o CLIMATECH?</h2>

        <p>
          O CLIMATECH é uma plataforma de previsão
          meteorológica desenvolvida para apresentar
          informações climáticas de maneira simples,
          rápida e moderna.
        </p>

      </section>

      <div className="about-grid">

        <div className="about-item">
          <span>⚛️</span>
          <h3>React</h3>
          <p>
            Interface construída com componentes React.
          </p>
        </div>

        <div className="about-item">
          <span>🎨</span>
          <h3>CSS</h3>
          <p>
            Design moderno e adaptável a diferentes telas.
          </p>
        </div>

        <div className="about-item">
          <span>🌍</span>
          <h3>Open-Meteo</h3>
          <p>
            Dados meteorológicos através de uma API gratuita.
          </p>
        </div>

      </div>

    </main>
  );
}

export default About;
