import 'bootstrap/dist/css/bootstrap.css';
import './css/Benefits.css'

import imgBonificacion from './../img/Benefits/Bonificacion.png';
import imgCreditoInmediato from './../img/Benefits/CreditoInmediato.png';
import imgTratohumano from './../img/Benefits/TratoHumano.png';
import imgTasaBaja from './../img/Benefits/TasaBaja.png';
import imgPagosChiquitos from './../img/Benefits/PagosChiquitos.png';
import React, { useState } from 'react';

function Benefits() {
    const [component, setComponent] = useState();
    const primaryColor = '#000f9f';
    const styleQuestionsTitle = {
        color: `${primaryColor}`,
        fontSize: '20px',
        fontWeight: 'bold'
    }
    const imgsBottom = [
        {
            title: 'Bonificación',
            code: 'BF',
            img: imgBonificacion
        },
        {
            title: 'Crédito Inmediato',
            code: 'CI',
            img: imgCreditoInmediato
        },
        {
            title: 'Trato Humano',
            code: 'TH',
            img: imgTratohumano
        },
        {
            title: 'Tasa Baja',
            code: 'TS',
            img: imgTasaBaja
        },
        {
            title: 'Pagos Chiquitos',
            code: 'PC',
            img: imgPagosChiquitos
        },
    ];
    function clickItem(code) {
        switch (code) {
            case 'BF':
                setComponent(bonificationComp());
                break;
            case 'CI':
                setComponent(creditoInmediatoComp());
                break;
            case 'TH':
                setComponent(tratoHumanoComp());
                break;
            case 'TS':
                setComponent(tasaBajaComp());
                break;
            case 'PC':
                setComponent(pagosChiquitosComp());
                break;
            default:
                setComponent(bonificationComp());
                break;
        }
    }

    function bonificationComp() {
        return (
            <div className='component-container container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='component-title-normal'>Rangos de <span className='component-title-blue'>bonificación</span> por cada <b>$1,000</b></h1>
                    </div>
                    <div className='col'>
                        <img className="mb-3" src={imgBonificacion} alt="" />

                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col p-2' style={{ backgroundColor: '#000f9f', borderRadius: '20px', height: '300px' }}>
                        <div>

                        </div>
                    </div>
                    <div className='col'>
                        <span style={styleQuestionsTitle}>¿Como ganar tu bonificación?</span>
                        <p>
                            Puedes ganar tu bonificación
                            cumpliendo con tus pagos en tiempo
                            y forma, siendo solidaria y asistiendo a tus
                            reuniones semanales
                        </p>
                        <br />
                        <br />
                        <span style={styleQuestionsTitle}>¿Como pierdes tu bonificación?</span>
                        <p>
                            Cunado realizas tus pagos atrasados<br />
                            Cuando no eres solidaria en tu grupo<br />
                            Cuando faltas a las reuniones<br />
                            o
                            cua solicitas permiso permanente
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    function creditoInmediatoComp() {
        return (
            <div className='component-container container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='component-title-normal'>Obtener tu <b className='component-title-blue'>Crédito</b> Inmediato</h1>
                    </div>
                    <div className='col'>
                        <img className="mb-3" src={imgCreditoInmediato} alt="" />
                    </div>
                </div>
                <div className='row text-start'>
                    <div className='col'>
                        <span style={styleQuestionsTitle}>¿Qué es el crédito inmediato y como obtenerlo?</span>
                        <br />
                        <br />
                        <p>
                            El crédito inmediato es la renovación de tu crédito Conserva, Al finalizar tu crédito con nosotros tienes la
                            posibilidad de continuar generando antigüedad, para ello es necesario es necesario notificarle a tu promotor
                            que desear renovar tu crédito conserva a mediados de tu crédito anterior para hacer todo  el papeleo
                            correspondiente y al finalizar tu crédito actual ya estará disponible inmediatamente el nuevo.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    function tratoHumanoComp() {
        return (
            <div className='component-container container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='component-title-normal'>Trato <b className='component-title-blue'>Humano</b></h1>
                    </div>
                    <div className='col'>
                        <img className="mb-3" src={imgTratohumano} alt="" />
                    </div>
                </div>
                <div className='row text-start'>
                    <div className='col'>
                        <span style={styleQuestionsTitle}>Conserva siempre te brindara un trato humano</span>
                        <br />
                        <br />
                        <p>
                            En conserva las personas van primero, sin importar quien seas, a que te dediques,
                            relogion, sexo, etc, siempre recibeiras un trato amable y respetuoso por nustros colabadores
                        </p>
                    </div>
                </div>
            </div >
        );
    }
    function tasaBajaComp() {
        return (
            <div className='component-container container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='component-title-normal'><b className='component-title-blue'>Tasa de interés</b><br />Conserva</h1>
                    </div>
                    <div className='col'>
                        <img className="mb-3" src={imgTasaBaja} alt="" />
                    </div>
                </div>
                <div className='row text-start'>
                    <div className='col'>
                        <span style={styleQuestionsTitle}>Conserva lleva más de 20 años con la misma tasa de interes</span>
                        <br />
                        <br />
                        <p>
                            Apesar de la inflación o cambios económicos, Conserva no incrementa
                            costos para seguir transformando la calidad  de vida de quienes más lo necesitan.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p>4.5%</p>
                    </div>
                    <div className='col'>
                        <p>
                            Menos el 16% de IVA = 3.8% <br />
                            Menos hasta el 1% de <b>BONIFICACIÓN</b> <br />
                            tu tasa de interés <b>puede reducirse</b> hasta <br />
                            <b>2.8%</b> <img style={{ height: '70px' }} className="mb-3" src={imgTasaBaja} alt="" />
                        </p>
                    </div>
                </div>
            </div >
        );
    }
    function pagosChiquitosComp() {
        return (
            <div className='component-container container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='component-title-normal'><b className='component-title-blue'>Pagos chiquitos</b><br />Conserva</h1>
                    </div>
                    <div className='col'>
                        <img className="mb-3" src={imgPagosChiquitos} alt="" />
                    </div>
                </div>
                <div className='row text-start'>
                    <div className='col'>
                        <span style={styleQuestionsTitle}>Pagos accesibles y comodos</span>
                        <br />
                        <br />
                        <p>
                            En Conserva tus pagos siempre seran chiquitos por que <b>pagas $74 pesos </b>
                            por cada mil, Icluye el IVA y no te cobraremos comiciones por apertura de credito,
                            ni manejo de cuenta.
                        </p>
                    </div>
                </div>
            </div >
        );
    }

    return (
        <div className="container text-center mt-4">
            <h2 className="benefits-title">Nuestros beneficios</h2>
            <div className="row text-center align-items-end">
                {imgsBottom.map((item) =>
                    <div key={item.title} onClick={() => clickItem(item.code)} className="col-sm-6 col-md-4 mb-4">
                        <img className="mb-3" src={item.img} alt="" />
                        <br />
                        <span>{item.title}</span>
                    </div>
                )}
            </div>
            {component}
        </div>
    );
}

export default Benefits;