import "./css/target2.css";
import img1 from './../img/r1.png';
import img2 from './../img/r2.png';
import img3 from './../img/r3.png';
import Benefits from "./Benefits";

function Target() {

    const infoCards = [
        {
            title: 'Mujeres de palabra conserva',
            img: img1,
            urlButton: '##',
            color: '#d86543',
            features: [
                'Montos desde 2,000 a 50,000 pesos',
                'Plazo de 4, 5 o 6 meses',
                'Tú decides si tu pago será semanal',
                'Bonificación aplican restricciones',
                'Sin comiciones'
            ],
            requeriments: [
                'Arma tu grupo mixto de 2 a 5 personas',
                'Contar con un negocio fijo o semifijo',
                'Contar con un año de antiguedad minimo con tu negocio',
                'Identificación oficial vigente',
                'Diversas garantias',
                'CURP',
                'Comprobante de domicilio (no mayor a 3 meses)',
                'Comprobante de domicilio del negocio (no mayor a 3 meses)',
                'Pago de cuota de protección conserva',
                'Sin reuniones semanales'
            ],
            text: 'Aqui Comienza tu historia con conserva. Si eres una mijer emprendedora solicita tu credito grupal hoy, te prestamos desde $2,000 hasta $50,000. que necesitas para emprender o hacer cerecer tu negocio.'
        },
        {
            title: 'Conserva T-activa',
            img: img2,
            urlButton: '##',
            color: '#f4990f',
            features: [
                'Montos desde 10,000 a 64,000 pesos',
                'Plazo de 4 a 9 meses',
                'Pago semanal, catorcenal o mensual',
                'Sin reuniones',
                'Grupo mixto de 2 a 5 personas'
            ],
            requeriments: [
                'Arma tu grupo mixto de 2 a 5 personas',
                'Contar con un negocio fijo o semifijo',
                'Contar con un año de antiguedad minimo con tu negocio',
                'Identificación oficial vigente',
                'Diversas garantias',
                'CURP',
                'Comprobante de domicilio (no mayor a 3 meses)',
                'Comprobante de domicilio del negocio (no mayor a 3 meses)',
                'Pago de cuota de protección conserva',
                'Sin reuniones semanales'
            ],
            text: 'Haz crecer tu negocio con conserva, crédito grupal mixto que te impulsa con prestamos desde $10,000 hasta $64,000, que necesitas para hacer crecer tu negocio'
        },
        {
            title: 'Tu Negocio con Conserva',
            img: img3,
            urlButton: '##',
            color: '#99cf16',
            features: [
                'Montos desde 20,000 a 200,000 pesos',
                'Plazo de 4 24 meses',
                'Periodicidad de pagos semanales o catorcenales',
                'Sin comiciones'
            ],
            requeriments: [
                'Contar con un año minimo con su negocio',
                'Contar con un negocio fijo',
                'Identificación oficial vigente',
                'Comprobante de domicilio (no mayor a 3 meses)',
                'Comprobante de domicilio del negocio (no mayor a 3 meses)',
                'Diversas opciones de garantías',
                'Pago de couta de protección conserva'
            ],
            text: 'Dale impulso a tu negocio con conserva. Solicita hot tu crédito individual y maximisa tus ganancias, prestmos desde $20,000 hasta $200,000, que esperas solicita tu crédito.'
        }
    ];

    function targetImg(img) {
        return (
            <div className="col-sm-12 col-md-12 col-lg-6 mb-4 mt-4">
                <img className="img-target" src={img} alt="" />
            </div>
        )
    };

    function targetCard(title, features, requeriments, text, urlButton) {
        return (
            <div className="col-sm-12 col-md-12 col-lg-6">
                <h2 className="conf-target-title">{title}</h2>

                <div className="text-center card-p all-text mb-5 mt-5">
                    <p>{text}</p>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mt-3 mb-3 p-0">
                        <a className="conf-target-button" href={urlButton}>Solicita tu crédito</a>

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mt-3 mb-3 p-0">
                        <a href="##">Ver más -{'>'} </a>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="">
            {/* <div className="title text-center mt-4 p-4">
                <h2 className="mt-3 mb-4"><span className="title-blue">¡Comienza hoy tu crecimiento con nosotros!</span><br /> Nuestros Créditos</h2>
                <span className="">
                    Adecuamos nuestros y tus necesidades y al desarrollo de tu emprendimiento y te asesoramos en el
                    crecimiento de tu negocio.
                </span>
            </div> */}

            {
                infoCards.map((card, idx) =>
                    <>
                        {/* <hr style={{border: '2px solid', width: '80%', 'background-color': 'res', color: 'red', opacity: '1'}}></hr> */}
                        {idx % 2 === 0 && idx !== 0 ? <hr style={{ border: 'none', width: '65%', height: '4px', backgroundColor: card.color, opacity: '1' }}></hr> : <></>}
                        {idx % 2 === 1 && idx !== 0 ? <hr style={{ border: 'none', marginLeft: '35%', width: '65%', height: '4px', backgroundColor: card.color, opacity: '1' }}></hr> : <></>}
                        <div key={idx} className={`container mt-4 target-${idx + 1} mr-1 ml-1`}>
                            <div className="row text-center align-items-center p-3">
                                {idx % 2 === 0 ? targetImg(card.img) : <></>}
                                {targetCard(card.title, card.features, card.requeriments, card.text, card.urlButton)}
                                {idx % 2 === 1 ? targetImg(card.img) : <></>}
                            </div>
                        </div>
                    </>
                )}

            {/* <Benefits /> */}

        </div>
    );
}

export default Target;