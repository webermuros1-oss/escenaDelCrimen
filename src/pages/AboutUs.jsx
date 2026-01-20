
import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function AboutUs() {
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

export default AboutUs;