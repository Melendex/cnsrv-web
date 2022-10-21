import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/areasConserva.css'
import Pagos from '../../img/Pagos.svg'
import CallCenter from '../../img/CallCenter.svg'
import Sucursales from '../../img/Sucursales.svg'

const AreasConserva = () => {
  return (
    <div className='container text-center mt-5'>
      <div className='row'>
          <div className='col-sm-4 col-md-4 col-lg-4 container-areas'>

            <img src={Pagos} alt="" className='imgAreas' />
            <div className='content-txtAreas'>
              <div className='titleAreas'>Medios de pago</div>
              <div className='subtitleAreas'>Ampliamos las formas de pago <br/>para tu comodidad</div>
            </div>

          </div>
          <div className='col-sm-4 col-md-4 col-lg-4 container-areas'>

            <img src={CallCenter} alt="" className='imgAreas' />
            <div className='content-txtAreas'>
              <div className='titleAreas'>Call Center</div>
              <div className='subtitleAreas'>Atención a cientes Conserva atenderemos todas tus dudas, llamanos al 800 290 9000</div>
            </div>

          </div>
          <div className='col-sm-4 col-md-4 col-lg-4 container-areas'>

            <img src={Sucursales} alt="" className='imgAreas' />
            <div className='content-txtAreas'>
              <div className='titleAreas'>Sucursales</div>
              <div className='subtitleAreas'>Ubica nustras sucursales y visitanos para atenderte de manera personal</div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default AreasConserva
