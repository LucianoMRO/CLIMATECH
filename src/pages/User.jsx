import "./User.css";

function User() {
  return (
    <main className="main-content user-content">

      <div className="page-heading">
        <span>ÁREA DO USUÁRIO</span>
        <h2>Meu <strong>Perfil</strong></h2>
        <p>Confira suas informações e preferências</p>
      </div>

      <section className="user-card">

        <div className="user-avatar">
          👤
        </div>

        <h2> Visitante </h2>
        <p className="user-email">
          
        </p>

        <span className="user-status">
          ● Conta visitante
        </span>

      </section>

      <div className="user-information">

        <h3>Informações pessoais</h3>

        <div className="user-info-item">
          <span>👤 Nome</span>
          <strong> Visitante </strong>
        </div>

        <div className="user-info-item">
          <span>📧 E-mail</span>
          <strong>visitante@climatech.com</strong>
        </div>

        <div className="user-info-item">
          <span>🌎 Cidade favorita</span>
          <strong>São Paulo, Brasil</strong>
        </div>

        <div className="user-info-item">
          <span>🌡️ Temperatura</span>
          <strong> Celsius (°C)</strong>
        </div>

      </div>

      <div className="user-preferences">

        <h3>Preferências</h3>

        <div className="preference-item">
          <div>
            <strong>Unidade de temperatura</strong>
            <p>Exibição em graus Celsius</p>
          </div>

          <span>°C</span>
        </div>

        <div className="preference-item">
          <div>
            <strong>Notificações climáticas</strong>
            <p>Exemplo de preferência de notificações</p>
          </div>

          <span>🔔</span>
        </div>

      </div>

      <p className="user-disclaimer">
        Esta é uma área demonstrativa. Nenhuma conta real foi criada.
      </p>

    </main>
  );
}

export default User;
