
import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

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

export default AvisosLegales;