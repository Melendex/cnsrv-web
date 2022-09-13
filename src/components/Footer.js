import 'bootstrap/dist/css/bootstrap.css';
import './css/Footer.css';
import './css/variables.css';
import logo_cnsrv_blue from './../img/Logos/logo_cnsrv_blue.svg';
import logo_personas from './../img/Logos/logo_personas.svg';
import logo_facebook from './../img/Footer/logo_facebook.svg';
import logo_whatsapp from './../img/Footer/logo_whatsapp.svg';
import logo_youtube from './../img/Footer/logo_youtube.svg';
import logo_linkedin from './../img/Footer/logo_linkedin.svg';
import logo_condusef from './../img/Footer/Recurso 15logo_condusef.svg';
import logo_cnsrv_politica from './../img/Footer/logo_cnsrv_politica.svg';
import logo_cnsrv_UNE from './../img/Footer/logo_cnsrv_UNE.svg';
import logo_buro from './../img/Footer/logo_buro.svg';


function FooterB() {
    return (
            <footer className="text-center text-lg-start bg-white text-muted mt-4">
                <section>
                    <div className="container">
                        <div className="row text-center align-items-end">
                            <div className="col-md-4 pr-4">
                                <img className="section-1-imgs" src={logo_cnsrv_blue} alt="Logotipo Conserva" />
                            </div>
                            <div className="col-md-4">
                                <h3 className="title-redes mb-4 mt-4">Siguenos en Redes</h3>
                                <div className="container">
                                    <div className="row align-items-end container-imgs-redes" >
                                        <div className="col col-md-3">
                                            <img className="imgs-redes" src={logo_facebook} alt="Logo Facebook" />
                                        </div>
                                        <div className="col col-md-3">
                                            <img className="imgs-redes" src={logo_whatsapp} alt="Logo WhatsApp" />
                                        </div>
                                        <div className="col col-md-3">
                                            <img className="imgs-redes" src={logo_youtube} alt="Logo YouTube" />
                                        </div>
                                        <div className="col col-md-3">
                                            <img className="imgs-redes" src={logo_linkedin} alt="Logo Linkedin" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="section-1-imgs" src={logo_personas} alt="Logo Personas" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="words-actions text-center p-4 mt-4">
                        <p>
                            Nosotros | Productos | Ubícanos | Solicita tu crédito | Vacantes | Programas Sociales
                            | Medios de pago | Contacto | Denuncias
                        </p>
                    </div>

                </section>

                <section className="section-3 pb-4">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col">
                                <img src={logo_cnsrv_politica} alt="Logo Conserva" />
                            </div>
                            <div className="col condusef text-center">
                                <img src={logo_condusef} alt="Logo Conserva" />
                            </div>
                            <div className="col">
                                <img src={logo_cnsrv_UNE} alt="Logo Conserva" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center all-text">
                        <p>
                            <b className="all-text">
                                Comisión Nacional para la protección y Defensa de los Usuarios de Servicios Financieros (CONSUSEF)
                            </b>
                            <br />
                            <li className="all-text"><b >Teléfono: </b>800 999 8080 y 55 53400999</li>
                            <li className="all-text"><b>Página de internet:</b> <a href="www.condusef.gob.mx">www.condusef.gob.mx</a></li>
                            <li className="all-text"><b>Correo electrónico: </b>asesoria@condusef.gob.mx</li>
                        </p>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-2 col-md-2 col-lg-2">
                                <img className="img-buro" src={logo_buro} alt="Logotipo Buro" />
                            </div>
                            <div className="col-sm-10 col-md-10 col-lg-10">
                                <p className="all-text">La información relevante y Evaluación de CONSULTORES DE SERVICIOS VARIOS S.A DE C.V. SOFOM
                                    E.N.R., así como las características de nuestro producto, podrá consultarlos al siguiente link,
                                    http://www.buro.gob.mx/BuroSectot.php?Sector=69, y si desea información sobre el sector al que
                                    pertenecemos podrá consultarlo al http://www.buro.gob.mx.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="all-text">
                                    CONSULTORES DE SERVICIOS VARIOS S.A DE C.V., ES UNA SCIENDAD FINANCIERA DE OBJETO MÚLTIPLE
                                    ENTIDAD NO REGULADA, CONSTITUIDA Y EXISTENTE DE CONFORMIDAD CON LAS LEYES DE LOS ESTADOS
                                    UNIDOS MEXICANOS, QUE NO REQUIERE AUTORIZACIÓN DE LA SECRETARIA DE HACIENDA Y CRÉDITO PÚBLICO
                                    ASÍ COMO TAMPOCO DE LA COMICION NACIONAL BANCARIA Y DE VALORES PARA SU CONSTITUCIÓN Y OPERACIÓN,
                                    SINO ÚNICAMENTE QUEDA SUJETA A LA SUPERVICIÓN DE LA COMISIÓN NACIONAL BANCARIA Y DE VALORES
                                    PARA EFECTOS DEL ARTÍCULO 56 DE LA LEY GENERAL DE ORGANIZACIONES Y ACTIVIDADES AUXILIARES DEL CRÉDITO.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

            </footer>
    );
}

export default FooterB;