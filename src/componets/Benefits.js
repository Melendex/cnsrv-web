import 'bootstrap/dist/css/bootstrap.css';
import './css/Benefits.css'

import imgBonificacion from './../img/Benefits/Bonificacion.png';
import imgCreditoInmediato from './../img/Benefits/CreditoInmediato.png';
import imgTratohumano from './../img/Benefits/TratoHumano.png';
import imgTasaBaja from './../img/Benefits/TasaBaja.png';
import imgPagosChiquitos from './../img/Benefits/PagosChiquitos.png';

function Benefits() {

    const imgsBottom = [
        {
            title: 'Bonificación',
            img: imgBonificacion
        },
        {
            title: 'Crédito Inmediato',
            img: imgCreditoInmediato
        },
        {
            title: 'Trato Humano',
            img: imgTratohumano
        },
        {
            title: 'Tasa Baja',
            img: imgTasaBaja
        },
        {
            title: 'Pagos Chiquitos',
            img: imgPagosChiquitos
        },
    ]
    return (
        <div className="container text-center mt-4">
            <h2 className="benefits-title">Nuestros beneficios</h2>
            <div className="row text-center align-items-end">
                {imgsBottom.map((item) =>
                    <div key={item.title} className="col-sm-6 col-md-4 mb-4">
                        <img className="mb-3" src={item.img} alt="" />
                        <br />
                        <span>{item.title}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Benefits;