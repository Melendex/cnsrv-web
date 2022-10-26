import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/infoPrevencion.css';
import info1 from '../../img/infoPrevencion/Cancer.svg';
import info2 from '../../img/infoPrevencion/Mama.svg';
import info3 from '../../img/infoPrevencion/Vista.svg';
import info4 from '../../img/infoPrevencion/Corazon.svg';
import info5 from '../../img/infoPrevencion/Dental.svg';
import info6 from '../../img/infoPrevencion/Educacion.svg';
import MySlide from './Slide.js';

const infoPrevencion = () => {
    const info = [
        {
          img: info1,
          value: '63,489',
          title: 'Prevención Cáncer Cervicouterino',
          subtitle: 'Orientación y apoyo de prevención a las mujeres emprendedoras'
        },
        {
          img: info2,
          value: '1,573',
          title: 'Prevención enfermedades de Mama',
          subtitle: 'Una mujer emprendedora necesita salud para estar bien en su negocio'
        },
        {
          img: info3,
          value: '18,351',
          title: 'Prevención Enfermedades de la Vista',
          subtitle: 'Cuidar tu vista para cuidar de tu emprendimiento'
        },
        {
          img: info4,
          value: '179',
          title: 'Enfremedades Crónico Degenerativas',
          subtitle: 'Apoyo en el tratatamiento de enfermedades para nuestras emprendedoras'
        },
        {
          img: info5,
          value: '197',
          title: 'Salud Bucal',
          subtitle: 'Campañas de apoyo para asegurar el bienestar bucal de nuestras clientas'
        },
        {
          img: info6,
          value: '18,872',
          title: 'Educación Financiera y Microempresarial',
          subtitle: 'Asesoramiento profesional para el emprendimiento de la mujer'
        },
    ]


  return (
      <div className=''>
        <div className="row align-items-start info-desktop">
          {info.length !== 0 ?
            info.map((data,index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-2 font-roboto">
                  <div className='text-center img-info-prev'text-start >
                    <img src={data.img} className="img-C2" alt=""/>
                  </div>
                  <div className='text-center secundario fs-4 fw-bold pb-2' >
                    {data.value}
                  </div>
                  <div className='txt1-info-prev'>
                    <b>{data.title}</b>
                  </div>
                  <div className='text-xs-center text-sm-center text-md-center text-lg-center txt2-info-prev'>
                    {data.subtitle}
                  </div>
                </div>
            )) : <></>
          }
      </div>
      <div className='info-phone'>
          <MySlide controls={true} >
            {info.length !== 0 ?
                info.map((data,index) => (
                  <div key={index} className='slide-item'>
                    <img alt="" src={data.img}/>
                    <div className='txt-value-info'>
                      {data.value}
                    </div>
                    <div className='txt-title-info subtitle-text'>
                      <b>{data.title}</b>
                    </div>
                    <div className='txt-subtitle-info'>
                      {data.subtitle}
                    </div>
                  </div>
              )) : <></>
            }              
          </MySlide>
      </div>
    </div>
  )
}

export default infoPrevencion;