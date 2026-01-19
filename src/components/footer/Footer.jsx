import './Footer.css';

function App() {
  return (
    <div className="site-wrapper">
      <main className="main-content">
        <h1>Contenido principal</h1>
        <p>Aquí va tu aplicación...</p>
      </main>

      <footer className="custom-footer">
        <div className="footer-glow-line"></div>

        <div className="footer-inner">
          <div className="footer-grid">

            <div>
              <h3 className="footer-logo-text">
                Escena del <span>Crimen</span>
              </h3>
              <p>Investigación asistida por IA.</p>
            </div>

            <div className="footer-nav">
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
            </div>

            <div className="social-list">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TW</a>
            </div>

          </div>

          <div className="footer-bottom">
            <p>© 2026 Escena del Crimen</p>
            <p>Hecho con precisión forense</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
