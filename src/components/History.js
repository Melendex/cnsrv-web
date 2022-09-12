import './css/History.css';
import './css/variables.css';
import 'bootstrap/dist/css/bootstrap.css';
import imgHistory from './../img/history.svg';
import imgLiderazgo from './../img/values/liderazgo.png';
import imgLogros from './../img/values/logros.png';
import imgCompromiso from './../img/values/compromiso.png';
import imgLealtad from './../img/values/lealtad.png';
import imgColaborador from './../img/values/colaborador.png';
import imgSentidoHumano from './../img/values/sentidoHumano.png';
import imgReciliencia from './../img/values/resiliencia.png';


function History() {

    const valores = [
        {
            img: imgLiderazgo,
            text: 'Guiamos a las personas hacia un mayor bienestar y desarrollo, con alto sentido de esponsabilidad social.'
        },
        {
            img: imgLogros,
            text: 'Cumplimos nuestras metas con honestidad. Somos un equipo entusiasta, eficiente y perseverante ante los retos.'
        },
        {
            img: imgCompromiso,
            text: 'Asumimos nuestra responsabilidad con capacidad e inspiración. Somos una familia en donde nuestra palabra vale.'
        },
        {
            img: imgLealtad,
            text: 'Buscamos el bien común y el crecimiento de nuestra empresa siendo fieles a nuestros principios y valores.'
        },
        {
            img: imgColaborador,
            text: 'Promovemos acciones educativas en cada relación que tenemos. Compartimos generosamente nuestro conocimiento y aprendemos mientras trabajamos juntos.'
        },
        {
            img: imgSentidoHumano,
            text: 'Destacamos el valor de la persona y de la vida en general. Somos respetuosos, empáticos y solidarios'
        },
        {
            img: imgReciliencia,
            text: 'Somos capaces de superar adversidades y trnasformar el dolor en fuerza interna. Actúamos de manera serena y salimos fortalecidos.'
        }
    ];

    function colImg() {
        return (
            <div className="col-sm-12 col-md-6">
                <img src={imgHistory} alt="Conserva" />
            </div>
        );
    }

    // alert(widthScreen)
    return (
        <div className="container">
            <div className="row">

                { window.screen.width < 768 ? colImg() : <></> }

                <div className="col-sm-12 col-md-6 mt-5">

                    <h1 className="history-tittle">Nuestra historia</h1>
                    <h3 className="history-subtittle">Una empresa 100% mexicana con más de 20 años de experiencia</h3>
                    <p className="history-parrafo">
                        Nacimos como CONSERVA en el año 1999, con la finalidad
                        de apoyar a grupos de mujeres marginadas, impulsando
                        proyectos productivos y desarrollo social. En el año 2000
                        iniciamos en el estado de Chiapas.
                        Incursionamos en el mundo de los microcréditos. A partir
                        del 2003 ampliamos nuestro servicio hacia el estado de Tabasco.
                        En 2008 abrimos nuestras sucursales en el estado de Yucatán,
                        posteriormente continuamos expandiendonos  y en el 2016
                        inicamos opercaiones puebla, 2019 en campeche y en el 2022
                        en el Estado de Mexico.
                        <br /> <br />
                        Actualmente, miles de personas se benefician con Conserva.
                        Gracias al trabajo de un gran equipo que ofrece sus servicios con calidad, respeto y calidez,
                        hemos ganado el reconocimiento a nivel local, nacional e internacional.
                        <br /> <br />
                        Desde el 2010 conramos con el distintivo de Empresa Socialmente Responsable,
                        que año con año, trabajamos para mantenerlo.
                    </p>
                </div>

                { window.screen.width > 768 ? colImg() : <></> }

            </div>

            <div className="container mt-5">
                <div className="row text-center p-4">
                    <div className="col-sm-12 col-md-6 mt-3">
                        <h2 className="history-subtittle mb-3">Misión</h2>
                        <p>
                            Somos una empresa mexicana, impulsamos procesos fomartivos de desarrollo
                            y bienestar para nuestros clientes, a través de servicios financieros y
                            no financieros eficientes liderados por colaboradores con vacación de servicio,
                            profesionalismo y alto compromiso social.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-3">
                        <h2 className="history-subtittle mb-3">Visión</h2>
                        <p>
                            Contribuir a generar un cambio positivo en la vida de las personas
                        </p>
                    </div>
                </div>
            </div>

            <div className="container text-center mt-5">
                <h2 className="history-subtittle">Nuestros valores</h2>

                {
                    valores.map((item) =>
                        <div key={item.text[3]} className="row align-items-center target-valores m-4 p-2">
                            <div className='col-sm-12 col-md-2'>
                                <img src={item.img} alt="Liderazgo" />
                            </div>
                            <div className='col-sm-12 col-md-10'>
                                <p className="mb-0">{item.text}</p>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default History;