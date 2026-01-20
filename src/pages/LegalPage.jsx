import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import './LegalPages.css';

// Componente Footer
function Footer() {
    return (
        <footer className="customFooter">
            <div className="footerGlowLine"></div>
            <div className="footerInner">
                <div className="footerGrid">
                    <div>
                        <h3 className="footerLogoText">
                            Escena del <span>Crimen</span>
                        </h3>
                    </div>

                    <div className="footerNav">
                        <Link to="/avisos-legales">Avisos Legales</Link>
                        <Link to="/terminos-uso">Términos de uso</Link>
                        <Link to="/sobre-nosotros">Sobre nosotros</Link>
                    </div>

                    <div className="socialList">
                        <a href="#" className="socialLink">
                            <span>📘</span>
                            <span className="socialText">Facebook</span>
                        </a>
                        <a href="#" className="socialLink">
                            <span>📷</span>
                            <span className="socialText">Instagram</span>
                        </a>
                        <a href="#" className="socialLink">
                            <span>🎵</span>
                            <span className="socialText">TikTok</span>
                        </a>
                    </div>
                </div>

                <div className="footerBottom">
                    <p>© 2026 Escena del Crimen</p>
                    <p>Hecho con precisión forense</p>
                </div>
            </div>
        </footer>
    );
}

// Componente Home
function Home() {
    return (
        <div className="pageContainer">
            <h1>Bienvenido a Escena del Crimen</h1>
            <p>Tu plataforma de contenido de crímenes reales y misterios sin resolver.</p>
            <div className="homeCards">
                <div className="card">
                    <h3>Casos Destacados</h3>
                    <p>Explora los casos más impactantes de la historia criminal.</p>
                </div>
                <div className="card">
                    <h3>Análisis Forense</h3>
                    <p>Descubre cómo la ciencia resuelve los crímenes más complejos.</p>
                </div>
                <div className="card">
                    <h3>Comunidad</h3>
                    <p>Únete a nuestra comunidad de entusiastas del crimen real.</p>
                </div>
            </div>
        </div>
    );
}

// Componente Avisos Legales
function AvisosLegales() {
    return (
        <div className="pageContainer legalPage">
            <div className="legalHeader">
                <h1>Avisos Legales</h1>
                <p className="lastUpdate">Última actualización: 20 de enero de 2026</p>
            </div>

            <section className="legalSection">
                <h2>1. Información General</h2>
                <p>
                    De conformidad con lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
                    de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
                </p>
                <ul>
                    <li><strong>Titular:</strong> Escena del Crimen S.L.</li>
                    <li><strong>NIF:</strong> B-12345678</li>
                    <li><strong>Domicilio:</strong> Calle Ejemplo, 123, 46001 Valencia, España</li>
                    <li><strong>Email:</strong> contacto@escenadelcrimen.com</li>
                    <li><strong>Teléfono:</strong> +34 900 123 456</li>
                </ul>
            </section>

            <section className="legalSection">
                <h2>2. Objeto</h2>
                <p>
                    El presente aviso legal regula el uso y utilización del sitio web www.escenadelcrimen.com,
                    del que es titular Escena del Crimen S.L. La navegación por el sitio web atribuye la condición
                    de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las
                    disposiciones incluidas en este Aviso Legal.
                </p>
            </section>

            <section className="legalSection">
                <h2>3. Propiedad Intelectual e Industrial</h2>
                <p>
                    Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, fotografías,
                    gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o
                    sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Escena del
                    Crimen S.L., sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación
                    reconocidos por la normativa vigente en materia de propiedad intelectual.
                </p>
            </section>

            <section className="legalSection">
                <h2>4. Responsabilidad</h2>
                <p>
                    Escena del Crimen S.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza
                    que pudieran derivarse de la falta de disponibilidad o de continuidad del funcionamiento del
                    sitio web y de los servicios habilitados en el mismo, así como de los errores en el acceso a
                    las distintas páginas web o a aquellas desde las que se presten.
                </p>
            </section>

            <section className="legalSection">
                <h2>5. Protección de Datos</h2>
                <p>
                    Para más información sobre el tratamiento de datos personales, consulte nuestra
                    <Link to="/terminos-uso" className="inlineLink"> Política de Privacidad</Link>.
                </p>
            </section>

            <div className="backLink">
                <Link to="/">← Volver al inicio</Link>
            </div>
        </div>
    );
}

// Componente Términos de Uso
function TerminosUso() {
    return (
        <div className="pageContainer legalPage">
            <div className="legalHeader">
                <h1>Términos de Uso</h1>
                <p className="lastUpdate">Última actualización: 20 de enero de 2026</p>
            </div>

            <section className="legalSection">
                <h2>1. Aceptación de los Términos</h2>
                <p>
                    Al acceder y utilizar Escena del Crimen, usted acepta estar sujeto a estos Términos de Uso,
                    todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de
                    todas las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos,
                    tiene prohibido usar o acceder a este sitio.
                </p>
            </section>

            <section className="legalSection">
                <h2>2. Uso del Contenido</h2>
                <p>
                    El contenido proporcionado en Escena del Crimen es únicamente para fines informativos y
                    educativos. No debe considerarse como asesoramiento legal, médico o profesional de ningún tipo.
                </p>
                <p><strong>Restricciones de uso:</strong></p>
                <ul>
                    <li>No copiar, modificar o distribuir el contenido sin autorización previa</li>
                    <li>No utilizar el contenido con fines comerciales sin permiso explícito</li>
                    <li>No realizar ingeniería inversa de ninguna parte del sitio web</li>
                    <li>No intentar acceder a áreas restringidas del sitio</li>
                </ul>
            </section>

            <section className="legalSection">
                <h2>3. Cuenta de Usuario</h2>
                <p>
                    Para acceder a ciertas funciones del sitio, es posible que deba crear una cuenta.
                    Usted es responsable de:
                </p>
                <ul>
                    <li>Mantener la confidencialidad de su contraseña</li>
                    <li>Todas las actividades que ocurran bajo su cuenta</li>
                    <li>Notificarnos inmediatamente de cualquier uso no autorizado</li>
                    <li>Proporcionar información precisa y actualizada</li>
                </ul>
            </section>

            <section className="legalSection">
                <h2>4. Contenido Sensible</h2>
                <p>
                    Nuestro sitio contiene información sobre crímenes reales que puede incluir descripciones
                    de violencia, muerte y otros temas sensibles. Al usar este sitio, usted reconoce y acepta
                    que puede estar expuesto a dicho contenido.
                </p>
                <p className="warning">
                    ⚠️ Se recomienda discreción del usuario. El contenido no es apropiado para menores de 18 años.
                </p>
            </section>

            <section className="legalSection">
                <h2>5. Privacidad y Protección de Datos</h2>
                <p>
                    Su privacidad es importante para nosotros. Recopilamos y procesamos datos personales de
                    acuerdo con el RGPD (Reglamento General de Protección de Datos) y la legislación española
                    aplicable. Los datos recopilados incluyen:
                </p>
                <ul>
                    <li>Información de registro (nombre, email)</li>
                    <li>Datos de navegación y cookies</li>
                    <li>Preferencias y configuraciones del usuario</li>
                </ul>
                <p>
                    Nunca compartiremos su información personal con terceros sin su consentimiento expreso,
                    excepto cuando sea requerido por ley.
                </p>
            </section>

            <section className="legalSection">
                <h2>6. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido original en Escena del Crimen, incluyendo textos, gráficos, logos,
                    imágenes y software, es propiedad de Escena del Crimen S.L. y está protegido por las
                    leyes de propiedad intelectual españolas e internacionales.
                </p>
            </section>

            <section className="legalSection">
                <h2>7. Limitación de Responsabilidad</h2>
                <p>
                    Escena del Crimen no será responsable de ningún daño directo, indirecto, incidental,
                    especial o consecuente que resulte del uso o la imposibilidad de usar nuestro servicio,
                    incluso si hemos sido advertidos de la posibilidad de tales daños.
                </p>
            </section>

            <section className="legalSection">
                <h2>8. Modificaciones</h2>
                <p>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
                    entrarán en vigor inmediatamente después de su publicación en el sitio web. Su uso
                    continuado del sitio después de cualquier cambio constituye su aceptación de los nuevos términos.
                </p>
            </section>

            <section className="legalSection">
                <h2>9. Contacto</h2>
                <p>
                    Si tiene preguntas sobre estos Términos de Uso, puede contactarnos en:
                </p>
                <ul>
                    <li>Email: legal@escenadelcrimen.com</li>
                    <li>Teléfono: +34 900 123 456</li>
                    <li>Dirección: Calle Ejemplo, 123, 46001 Valencia, España</li>
                </ul>
            </section>

            <div className="backLink">
                <Link to="/">← Volver al inicio</Link>
            </div>
        </div>
    );
}

// Componente Sobre Nosotros
function SobreNosotros() {
    return (
        <div className="pageContainer legalPage">
            <div className="legalHeader">
                <h1>Sobre Nosotros</h1>
                <p className="lastUpdate">Conoce el equipo detrás de Escena del Crimen</p>
            </div>

            <section className="legalSection aboutIntro">
                <h2>Nuestra Misión</h2>
                <p className="highlight">
                    En Escena del Crimen nos dedicamos a explorar, documentar y analizar casos criminales reales
                    con el más alto nivel de rigor periodístico y respeto por las víctimas y sus familias.
                </p>
            </section>

            <section className="legalSection">
                <h2>Quiénes Somos</h2>
                <p>
                    Somos un equipo multidisciplinario de periodistas de investigación, criminólogos, expertos
                    forenses y creadores de contenido apasionados por desentrañar los misterios más complejos
                    del crimen real.
                </p>
                <p>
                    Fundada en 2024, Escena del Crimen nació de la necesidad de crear un espacio donde el true
                    crime se aborde con profesionalismo, ética y responsabilidad, alejándonos del sensacionalismo
                    y centrándonos en el análisis objetivo y educativo.
                </p>
            </section>

            <section className="legalSection">
                <h2>Nuestros Valores</h2>
                <div className="valuesGrid">
                    <div className="valueCard">
                        <h3>🔍 Rigor Investigativo</h3>
                        <p>Verificamos cada dato y consultamos fuentes oficiales y expertos en cada caso.</p>
                    </div>
                    <div className="valueCard">
                        <h3>❤️ Respeto</h3>
                        <p>Tratamos cada caso con la dignidad que merecen las víctimas y sus familias.</p>
                    </div>
                    <div className="valueCard">
                        <h3>📚 Educación</h3>
                        <p>Buscamos educar sobre criminología, justicia y el sistema legal.</p>
                    </div>
                    <div className="valueCard">
                        <h3>⚖️ Objetividad</h3>
                        <p>Presentamos los hechos sin prejuicios ni sensacionalismo.</p>
                    </div>
                </div>
            </section>

            <section className="legalSection">
                <h2>Nuestro Equipo</h2>
                <div className="teamGrid">
                    <div className="teamMember">
                        <div className="memberInitial">MC</div>
                        <h3>María Castro</h3>
                        <p className="role">Directora Editorial</p>
                        <p>Periodista de investigación con 15 años de experiencia en casos criminales.</p>
                    </div>
                    <div className="teamMember">
                        <div className="memberInitial">JR</div>
                        <h3>Javier Ruiz</h3>
                        <p className="role">Criminólogo Jefe</p>
                        <p>Doctor en Criminología especializado en perfilación criminal.</p>
                    </div>
                    <div className="teamMember">
                        <div className="memberInitial">LG</div>
                        <h3>Laura Gómez</h3>
                        <p className="role">Experta Forense</p>
                        <p>Consultora forense con experiencia en análisis de evidencias.</p>
                    </div>
                    <div className="teamMember">
                        <div className="memberInitial">DS</div>
                        <h3>David Sánchez</h3>
                        <p className="role">Productor de Contenido</p>
                        <p>Especialista en narrativa documental y true crime.</p>
                    </div>
                </div>
            </section>

            <section className="legalSection">
                <h2>Qué Hacemos</h2>
                <ul>
                    <li><strong>Investigación de casos:</strong> Analizamos en profundidad casos criminales históricos y actuales</li>
                    <li><strong>Contenido educativo:</strong> Creamos material sobre criminología, psicología forense y justicia</li>
                    <li><strong>Documentales y podcasts:</strong> Producimos contenido multimedia de alta calidad</li>
                    <li><strong>Comunidad:</strong> Fomentamos el debate respetuoso y educado sobre casos reales</li>
                    <li><strong>Colaboraciones:</strong> Trabajamos con expertos, autoridades y organizaciones de víctimas</li>
                </ul>
            </section>

            <section className="legalSection">
                <h2>Nuestro Compromiso Ético</h2>
                <p>
                    Nos comprometemos a tratar cada caso con sensibilidad y respeto. Trabajamos en estrecha
                    colaboración con familias de víctimas cuando es posible, y siempre priorizamos la dignidad
                    de las personas afectadas sobre el entretenimiento.
                </p>
                <p>
                    Creemos firmemente en la importancia de la justicia y en dar voz a quienes ya no pueden hablar.
                    Nuestro trabajo busca honrar su memoria y contribuir a que casos sin resolver encuentren respuestas.
                </p>
            </section>

            <section className="legalSection contactSection">
                <h2>Contacta con Nosotros</h2>
                <p>¿Tienes información sobre un caso? ¿Quieres colaborar con nosotros? ¿Tienes sugerencias?</p>
                <ul>
                    <li>📧 Email: contacto@escenadelcrimen.com</li>
                    <li>📱 Teléfono: +34 900 123 456</li>
                    <li>📍 Dirección: Calle Ejemplo, 123, 46001 Valencia, España</li>
                    <li>💬 Redes Sociales: Encuéntranos en Facebook, Instagram y TikTok</li>
                </ul>
            </section>

            <div className="backLink">
                <Link to="/">← Volver al inicio</Link>
            </div>
        </div>
    );
}

// Componente App Principal
function App() {
    return (
        <Router>
            <div className="siteWrapper">
                <main className="mainContent">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/avisos-legales" element={<AvisosLegales />} />
                        <Route path="/terminos-uso" element={<TerminosUso />} />
                        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;