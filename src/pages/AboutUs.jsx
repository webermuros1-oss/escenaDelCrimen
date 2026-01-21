import '../style/AboutUs.css';
import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <div className="pageContainer legalPage">
            <div className="legalHeader">
                <h1>Sobre Nosotros</h1>
                <p className="lastUpdate">Tu plataforma de streaming de crimen, misterio y suspenso</p>
            </div>

            <section className="legalSection aboutIntro">
                <h2>Nuestra Misión</h2>
                <p className="highlight">
                    En Escena del Crimen ofrecemos una experiencia de streaming inmersiva al estilo Netflix,
                    especializada en películas, series y documentales de crimen real, misterio, thriller
                    y suspenso.
                </p>
            </section>

            <section className="legalSection">
                <h2>Quiénes Somos</h2>
                <p>
                    Somos un equipo de desarrolladores, curadores de contenido y amantes del cine y las
                    series de crimen, dedicados a crear un videoclub digital moderno y fácil de usar.
                </p>
                <p>
                    Fundada en 2026, Escena del Crimen nace como una alternativa temática a las grandes
                    plataformas de streaming, enfocándose exclusivamente en historias intensas,
                    investigaciones reales y ficción criminal de alta calidad.
                </p>
            </section>

            <section className="legalSection">
                <h2>Nuestros Valores</h2>
                <div className="valuesGrid">
                    <div className="valueCard">
                        <h3>🎬 Calidad</h3>
                        <p>Seleccionamos contenido premium con altos estándares narrativos y visuales.</p>
                    </div>
                    <div className="valueCard">
                        <h3>🧠 Curaduría</h3>
                        <p>Organizamos el catálogo por géneros y recomendaciones personalizadas.</p>
                    </div>
                    <div className="valueCard">
                        <h3>🚀 Innovación</h3>
                        <p>Mejoramos constantemente la experiencia del usuario y la plataforma.</p>
                    </div>
                    <div className="valueCard">
                        <h3>🔐 Seguridad</h3>
                        <p>Protegemos la información y privacidad de nuestros usuarios.</p>
                    </div>
                </div>
            </section>

            <section className="legalSection">
                <h2>Nuestro Equipo</h2>
                <div className="teamGrid">
                    <div className="teamMember">
                        <div className="memberInitial">AC</div>
                        <h3>Ana Cruz</h3>
                        <p className="role">CEO & Fundadora</p>
                        <p>Apasionada por el cine criminal y la tecnología.</p>
                    </div>
                    <div className="teamMember">
                        <div className="memberInitial">RM</div>
                        <h3>Raúl Martínez</h3>
                        <p className="role">CTO</p>
                        <p>Arquitecto de software y desarrollador full stack.</p>
                    </div>
                    <div className="teamMember">
                        <div className="memberInitial">LP</div>
                        <h3>Lucía Pérez</h3>
                        <p className="role">Curadora de Contenido</p>
                        <p>Especialista en cine, series y documentales de crimen.</p>
                    </div>
                    <div className="teamMember">
                        <div className="memberInitial">JG</div>
                        <h3>Jorge Gómez</h3>
                        <p className="role">UX/UI Designer</p>
                        <p>Diseñador de experiencias digitales intuitivas.</p>
                    </div>
                </div>
            </section>

            <section className="legalSection">
                <h2>Qué Hacemos</h2>
                <ul>
                    <li><strong>Streaming:</strong> Ofrecemos un catálogo exclusivo de crimen y suspenso</li>
                    <li><strong>Recomendaciones:</strong> Sugerimos contenido según tus gustos</li>
                    <li><strong>Listas personalizadas:</strong> Guarda tus favoritos y sigue viendo</li>
                    <li><strong>Perfiles:</strong> Crea perfiles para distintos usuarios</li>
                    <li><strong>Actualizaciones:</strong> Agregamos nuevo contenido cada semana</li>
                </ul>
            </section>

            <section className="legalSection">
                <h2>Nuestro Compromiso</h2>
                <p>
                    Nos comprometemos a ofrecer una plataforma estable, segura y con contenido de alta
                    calidad para todos los amantes del crimen y el suspenso.
                </p>
                <p>
                    Trabajamos para que cada sesión en Escena del Crimen sea tan adictiva y fluida como
                    en cualquier gran plataforma de streaming.
                </p>
            </section>

            <section className="legalSection contactSection">
                <h2>Contacta con Nosotros</h2>
                <p>¿Tienes sugerencias de contenido? ¿Problemas técnicos? ¿Quieres colaborar?</p>
                <ul>
                    <li>📧 Email: soporte@escenadelcrimen.com</li>
                    <li>📱 Teléfono: +34 900 555 777</li>
                    <li>📍 Dirección: Calle Streaming, 404, Madrid, España</li>
                    <li>💬 Redes Sociales: Facebook, Instagram y TikTok</li>
                </ul>
            </section>

            <div className="backLink">
                <Link to="/">← Volver al inicio</Link>
            </div>
        </div>
    );
}

export default AboutUs;
