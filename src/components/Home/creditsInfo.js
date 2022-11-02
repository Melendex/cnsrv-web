import React, { useEffect, useState } from 'react';
import {Link }from "react-router-dom";
import numberFormat from '../../utils/numberFormatter';
import roundNumber from '../../utils/roundNumber';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/creditsInfo.css';

const CreditsInfo = () => {

    const [data, setData] = useState([]);
    const [monto, setMonto] = useState(0);
    const [montoMin, seMontoMin] = useState(0);
    const [montoMax, seMontoMax] = useState(0);
    const [plazo, setPlazo] = useState(0);
    const [plazoMin, setPlazoMin] = useState(0);
    const [plazoMax, setPlazoMax] = useState(0);
    const [tax, setTax] = useState(0);
    const [yearRate, setYearRate] = useState(0);
    const [period, setPeriod] = useState({});
    const [cuota, setCuota] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [impuestos, setImpuestos] = useState(0);
    

    const credits = [
        {
            "default_frecuency": [
                "Ql",
                "Quincenal"
            ],
            "deleted": false,
            "_id": "62f51c545b4f9400161f7c87",
            "default_mobile_product": false,
            "enabled": true,
            "product_type": "1",
            "product_name": "CREDITO ESPECIAL",
            "external_id": 4,
            "min_amount": "4000",
            "max_amount": "150000",
            "default_amount": "4000",
            "step_amount": "1000",
            "min_term": 4,
            "max_term": 60,
            "default_term": 4,
            "min_rate": "12",
            "max_rate": "48",
            "rate": "48",
            "tax": "16",
            "years_type": "Comercial",
            "allowed_term_type": [
                {
                    "_id": "62f51c545b4f9400161f7c88",
                    "identifier": "Q",
                    "value": "Quincena(s)",
                    // "year_periods": "24"
                    "year_periods": "26.0714"
                },
                {
                    "_id": "62f51c545b4f9400161f7c89",
                    "identifier": "M",
                    "value": "Mes(es)",
                    "year_periods": "12"
                }
            ],
            "allowed_frequency": [
                {
                    "_id": "62f51c545b4f9400161f7c8a",
                    "identifier": "Ql",
                    "value": "Quincenal"
                },
                {
                    "_id": "62f51c545b4f9400161f7c8b",
                    "identifier": "Ml",
                    "value": "Mensual"
                }
            ],
            "liquid_guarantee": "10",
            "GL_financeable": false,
            "requires_insurance": true,
            "logo": "iVBORw0KGg",
            "avatar": "iVBORw0KGgoAAAANS"
        }
    ]

    const [txtplazo, settxtPlazo] = useState('Semanas');
    const [btnPlazo, setBtnPlazo] = useState([]);
    // const btnPlazo = [
    //     {
    //         plazo: 'Semanal',
    //         frecuencia: 'Semanas'
    //     },
    //     {
    //         plazo: 'Catorcenal',
    //         frecuencia: 'Catorcenas'
    //     },
    //     {
    //         plazo: 'Mensual',
    //         frecuencia: 'Meses'
    //     },
    // ];

    const result = [
        {
            key: 'Préstamo',
            value: monto
        },
        {
            key: 'Intereses',
            value: totalInterest
        },
        {
            key: 'IVA Intereses',
            value: impuestos
        },
        {
            key: 'Total a pagar',
            value: totalPayment
        },
    ];

    const changeData = (data) =>{
        setMonto(data.min_amount);
        setPlazo(data.min_term);
        seMontoMin(data.min_amount);
        seMontoMax(data.max_amount);
        setPlazoMin(data.min_term);
        setPlazoMax(data.max_term);
        setTax(data.tax);

        const frecuencia = data.allowed_frequency;
        const tipo_plazo = JSON.parse(JSON.stringify(data.allowed_term_type));
        const Frecuencia = [];
        frecuencia.forEach((frecuencia, idx) => {
            
            const plazo = tipo_plazo[idx];

            const newData = {
                plazo: plazo.value,
                frecuencia: frecuencia.value,
                year_periodos: plazo.year_periods,
                identifier: plazo.identifier
            };

            Frecuencia.push(newData);
        });

        setBtnPlazo(Frecuencia);
        setData(data);
    }

    useEffect(() => {
        if(data.length !== 0 ) {

            const iva = (1 + parseFloat(data.tax)/100);
            const year_rate = (parseFloat(data.rate) * iva) / 100;
            setYearRate(year_rate);

            const year_periods = parseFloat(period.year_periodos);
            const period_rate = year_periods ? year_rate / year_periods : 0;

            // console.log('year_periods', year_periods);
            // console.log('period_rate', period_rate);

            const npagos = -plazo;

            // console.log('importe', monto);
            // console.log('npagos', npagos);
            // console.log('iva', iva)

            const numerator = monto * period_rate;
            const divisor = 1 - (1 + period_rate) ** npagos;

            let cuota = divisor ? numerator / divisor : 0;
            // console.log('cuota', roundNumber(cuota))
            setCuota(roundNumber(cuota));

            let acumuladorTotal = 0;
            let acuInterest = 0;
            let acuImpuesto = 0;
            let saldo = monto;
            let impuesto_periodo = 0;
            let capital_periodo = 0;
            let interes_periodo = 0;

            for (let i = 0; i < plazo; i++) {

                interes_periodo =  (saldo * period_rate) / iva;
                impuesto_periodo = interes_periodo * (iva - 1) 
                capital_periodo = cuota - interes_periodo - impuesto_periodo
                saldo = saldo - capital_periodo;


                acumuladorTotal = acumuladorTotal + roundNumber(cuota);
                acuInterest = roundNumber(acuInterest) + roundNumber(interes_periodo);
                acuImpuesto = roundNumber(acuImpuesto) + roundNumber(impuesto_periodo);
            }

            // console.log('Acumulador Interes', acuInterest);
            setTotalPayment(roundNumber(acumuladorTotal));
            setTotalInterest(acuInterest)
            setImpuestos(acuImpuesto);
            
        }
    },[btnPlazo, data, period, monto, plazo])

    return (
        <div className='text-center primario'>
            <div className='contenedor text-start'>
                <span className='txtInfo'>¿Cuál crédito te interesa?</span>

                <div className='wrapper-botones mb-3'>
                    {/* <div className="botones">
                        <button className='btn btn-credits'>Individual</button>
                    </div>
                    <div className="botones">
                        <button className='btn btn-credits'>Grupal</button>
                    </div>
                    <div className="botones">
                        <button className='btn btn-credits'>Mixto</button>
                    </div> */}

                    {
                        credits.length !==0
                        ? credits.map((item, idx) => (
                            <div className="botones" key={idx}>
                                <button className='btn btn-credits' onClick={() => changeData(item)}>{item.product_type === '1' ? 'Individual': ''}</button>
                            </div>
                        )): <></>
                    }
                </div>

                <span className='txtInfo'>Monto que necesitas</span>
                <p/>
                <input className='inputMonto' value={numberFormat(monto)} readOnly/>
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
                        ? btnPlazo.map((item, idx) =>(
                            <div className="botones" key={idx}>
                                <button className='btn payment-btn' onClick={() => {settxtPlazo(item.plazo); setPeriod(item)}}>{item.frecuencia}</button>
                            </div>  
                        ))
                        :<></>
                    }
                </div>

                <span className='txtInfo'>Plazos</span>
                <p/>
                <input className='inputMonto' value={`${plazo} ${txtplazo}`} readOnly/>
                <br/>
                <div className='columnas-inline txtInfo'>
                    <div className='result-key'>{`${plazoMin} ${txtplazo}`}</div>
                    <div className='result-value'>{`${plazoMax} ${txtplazo}`}</div>
                </div>
                <input defaultValue={plazoMin} step={1} min={plazoMin} max={plazoMax} onChange={ e => setPlazo(e.target.value)} className='inputRange2' type="range" />


                {
                    result.map((result, i) => (
                        <div className='columnas-inline txt2Info' key={i}>
                            <div className='result-key'>{result.key}</div>
                            <div className='result-value'>{numberFormat(result.value)}</div>
                        </div>
                    ))
                }

                <div className='resultInfo row'>
                    <div className='col col-sm-12 col-md-6 col-lg-6'>{ `${plazo} PAGOS DE`}</div>
                    <div className='col col-sm-12 col-md-6 col-lg-6 text-end'>{numberFormat(cuota)}</div>
                </div>

                <div className='txt2Info col-sm-6 col-md-6 col-lg-6'>Tasa anual sin IVA: {yearRate}%</div>
                <div className='txt2Info col-sm-6 col-md-6 col-lg-6'>CAT sin IVA: {0}%</div>
                <div className='txt2Info col-sm-6 col-md-6 col-lg-6'>IVA: {tax}%</div>

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
