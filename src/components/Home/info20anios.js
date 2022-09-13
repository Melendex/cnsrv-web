import React from 'react';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/home.css';
import img20 from '../../img/20.svg';


const info20anios = () => {
  return (
    <div className='row align-items-center px-4 mt-5 info20 py-3 mb-4'>
        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center'>
            <img src={img20} className='img-20' alt=""/>
            <div className='fs-6 primario fw-bold font-arial'>
            Años con la misma <br/> tasa de interés.
            </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center pe-4 fs-4 primario font-roboto'>
        <div>
            Más de 20 años manteniendo una de las tasas de interés más bajas, sin importar inflación o cambios económicos, Conserva no incrementa costos para seguir transformando la calidad de vida de quienes más lo necesitan
        </div>
        </div>
    </div>
  )
}

export default info20anios