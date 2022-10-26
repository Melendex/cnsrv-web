import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/areasConserva.css'
import Pagos from '../../img/Pagos.svg'
import CallCenter from '../../img/CallCenter.svg'
import Sucursales from '../../img/Sucursales.svg'
import MySlide from './Slide';

const AreasConserva = () => {

  const data = [
    {
      img: Pagos,
      title: 'Medios de Pago',
      subtitle: 'Ampliamos las formas de pago \npara tu comodidad'
    },
    {
      img: CallCenter,
      title: 'Call Center',
      subtitle: 'Atención a cientes Conserva atenderemos todas tus dudas, llamanos al 800 290 9000'
    },
    {
      img: Sucursales,
      title: 'Sucursales',
      subtitle: 'Ubica nustras sucursales y visitanos para atenderte de manera personal'
    },
  ];


  return (
    <div className=''>
      <div className='row areas-desktop text-center'>
          {
            data.length !== 0
            ? data.map((item, idx) => (
              <div key={idx} className='col-lg-4 container-areas'>
                <img src={item.img} alt="" className='imgAreas' />
                <div className='content-txtAreas'>
                  <div className='titleAreas'>{item.title}</div>
                  <div className='subtitleAreas'>{item.subtitle}</div>
                </div>
              </div>
            )) : <></>
          }
      </div>

      <div className='areas-phone'>
          <MySlide controls={true} >
            {
              data.length !== 0
                ? data.map((item, idx) => (
                  <div key={idx} className='slide-item'>
                    <div className='container-areas'>
                      <img src={item.img} alt="" className='imgAreas' />
                      <div className='content-center'>
                        <div className='content-txtAreas'>
                          <div className='titleAreas'>{item.title}</div>
                          <div className='subtitleAreas'>{item.subtitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
              )) : <></>
            }              
          </MySlide>
      </div>
    </div>
  )
}

export default AreasConserva
