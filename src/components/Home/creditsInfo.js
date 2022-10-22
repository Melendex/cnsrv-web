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
            <div className='contenedor text-start'>
                <span className='txtInfo'>¿Cuál crédito te interesa?</span>

                <div className='wrapper-botones mb-3'>
                    <div className="botones">
                        <button className='btn btn-credits'>Individual</button>
                    </div>
                    <div className="botones">
                        <button className='btn btn-credits'>Grupal</button>
                    </div>
                    <div className="botones">
                        <button className='btn btn-credits'>Mixto</button>
                    </div>
                </div>

                <span className='txtInfo'>Monto que necesitas</span>
                <p/>
                <input className='inputMonto' value={numberFormat(monto)} />
                <br/>
                <div className='columnas-inline txtInfo'>
                    <div className='result-key'>{numberFormat(montoMin)}</div>
                    <div className='result-value'>{numberFormat(montoMax)}</div>
                </div>
                <input defaultValue={montoMin} step={500} min={montoMin} max={montoMax} onChange={ e => setMonto(e.target.value)} className='inputRange' type="range" />
                
                <span className='txtInfo'>Pagos</span>
                <div className='wrapper-botones'>
                    {
                        btnPlazo.length !== 0
                        ? btnPlazo.map((item) =>(
                            <div className="botones">
                                <button className='btn payment-btn' onClick={() => settxtPlazo(item.frecuencia)}>{item.plazo}</button>
                            </div>  
                        ))
                        :<></>
                    }
                </div>

                <span className='txtInfo'>Plazos</span>
                <p/>
                <input className='inputMonto' value={`${plazo} ${txtplazo}`} />
                <br/>
                <div className='columnas-inline txtInfo'>
                    <div className='result-key'>{`${plazoMin} ${txtplazo}`}</div>
                    <div className='result-value'>{`${plazoMax} ${txtplazo}`}</div>
                </div>
                <input defaultValue={plazoMin} step={1} min={plazoMin} max={plazoMax} onChange={ e => setPlazo(e.target.value)} className='inputRange2' type="range" />


                {
                    result.map((result, i) => (
                        <div className='columnas-inline txt2Info'>
                            <div className='result-key'>{result.key}</div>
                            <div className='result-value'>{numberFormat(result.value)}</div>
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
                    <Link to="#" className='btn loanBtn'>Solicitar crédito</Link>
                </div>

                

            </div>


        </div>
    )
}

export default CreditsInfo;
