import React, { useState } from 'react';
import {Link }from "react-router-dom";
import numberFormat from '../../utils/numberFormatter';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/creditsInfo.css';

const CreditsInfo = () => {

    const [monto, setMonto] = useState(0);
    const montoMax = 200000;
    const montoMin = 20000;

    const [plazo, setPlazo] = useState(0);
    const plazoMax = 16;
    const plazoMin = 2;

    const [txtplazo, settxtPlazo] = useState('Semanas');
    const btnPlazo = [
        {
            plazo: 'Semanal',
            frecuencia: 'Semanas'
        },
        {
            plazo: 'Catorcenal',
            frecuencia: 'Catorcenas'
        },
        {
            plazo: 'Mensual',
            frecuencia: 'Meses'
        },
    ]

    const result = [
        {
            key: 'Préstamo',
            value: 0
        },
        {
            key: 'Intereses',
            value: 0
        },
        {
            key: 'IVA Intereses',
            value: 0
        },
        {
            key: 'Total a pagar',
            value: 0
        },
    ];

    // console.log(numberFormat(monto))

    return (
        <div className='text-center primario'>
            <span className='fs-3'>CALCULA TUS PAGOS</span>

            <div className='contenedor text-start'>
                <span className='txtInfo'>¿Cuál crédito te interesa?</span>
                <div className='row mb-3'>
                    <div className="col-sm-2 col-md-12 col-lg-2">
                        <button className='btn btn-primary btn-credits'>Individual</button>
                    </div>
                    <div className="col-sm-2 col-md-12 col-lg-2">
                        <button className='btn btn-primary btn-credits'>Grupal</button>
                    </div>
                    <div className="col-sm-2 col-md-12 col-lg-2">
                        <button className='btn btn-primary btn-credits'>Mixto</button>
                    </div>
                </div>

                <span className='txtInfo'>Monto que necesitas</span>
                <p/>
                <input className='inputMonto' value={numberFormat(monto)} />
                <br/>
                <div className='row'>
                    <div className='txtInfo col-sm-6 col-md-6 col-lg-6'>{numberFormat(montoMin)}</div>
                    <div className='txtInfo col-sm-6 col-md-6 col-lg-6 text-end'>{numberFormat(montoMax)}</div>
                </div>
                <input defaultValue={montoMin} step={500} min={montoMin} max={montoMax} onChange={ e => setMonto(e.target.value)} className='inputRange' type="range" />
                
                <span className='txtInfo'>Pagos</span>
                {/* {
                    btnPlazo.length !== 0
                    ? btnPlazo.map((item) =>{
                        return <div className='row mb-3'>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <button className='btn paymentBtn' onClick={() => settxtPlazo(item.frecuencia)}>{item.plazo}</button>
                            </div>
                        </div>
                    })
                    :<></>
                } */}
                <div className='row mb-3'>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                        <button className='btn paymentBtn' onClick={() => settxtPlazo('Semanas')}>Semanal</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                        <button className='btn paymentBtn' onClick={() => settxtPlazo('Catorcenas')}>Catorcenal</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                        <button className='btn paymentBtn' onClick={() => settxtPlazo('Meses')}>Mensual</button>
                    </div>
                </div>

                <span className='txtInfo'>Plazos</span>
                <p/>
                <input className='inputMonto' value={`${plazo} ${txtplazo}`} />
                <br/>
                <div className='row'>
                    <div className='txtInfo col-sm-6 col-md-6 col-lg-6'>{`${plazoMin} ${txtplazo}`}</div>
                    <div className='txtInfo col-sm-6 col-md-6 col-lg-6 text-end'>{`${plazoMax} ${txtplazo}`}</div>
                </div>
                <input defaultValue={plazoMin} step={1} min={plazoMin} max={plazoMax} onChange={ e => setPlazo(e.target.value)} className='inputRange2' type="range" />


                {
                    result.map((result, i) => (
                        <div className='row'>
                            <div className='txt2Info col-sm-6 col-md-6 col-lg-6'>{result.key}</div>
                            <div className='txt2Info col-sm-6 col-md-6 col-lg-6 text-end'>{numberFormat(result.value)}</div>
                        </div>
                    ))
                }

                <div className='resultInfo row'>
                    <div className='col col-sm-12 col-md-6 col-lg-6'>{ `${plazo} PAGOS DE`}</div>
                    <div className='col col-sm-12 col-md-6 col-lg-6 text-end'>{numberFormat(1500)}</div>
                </div>

                <div className='txt2Info col-sm-6 col-md-6 col-lg-6'>Tasa anual sin IVA: {numberFormat(0)}</div>
                <div className='txt2Info col-sm-6 col-md-6 col-lg-6'>CAT sin IVA: {numberFormat(0)}</div>
                <div className='txt2Info col-sm-6 col-md-6 col-lg-6'>IVA: 16%</div>

                <div className='txt3Info'>
                    Esta herramienta es únicamente una simulación. <br/>
                    Las condiciones, precios y tasas varían de acuerdo al crédito y monto solicitado
                </div>

                <div className='text-center'>
                    {/* <button className='btn button'>Solicitar crédito</button> */}
                    <Link to="#" className='btn loanBtn'>Solicitar crédito</Link>
                </div>

                

            </div>


        </div>
    )
}

export default CreditsInfo;
