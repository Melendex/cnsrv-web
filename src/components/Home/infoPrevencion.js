import React from 'react';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/home.css';
import info1 from '../../img/infoPrevencion/Cancer.svg'
import info2 from '../../img/infoPrevencion/Mama.svg'
import info3 from '../../img/infoPrevencion/Vista.svg'
import info4 from '../../img/infoPrevencion/Corazon.svg'

const infoPrevencion = () => {
    const info = [
        {
          img: info1,
          value: 63489,
          title: 'Prevención Cáncer Cervicouterino',
          subtitle: 'Orientación y apoyo de prevención a las mujeres emprendedoras'
        },
        {
          img: info2,
          value: 1573,
          title: 'Prevención enfermedades de mama',
          subtitle: 'Una mujer emprendedora necesita salud para estar bien en su negocio'
        },
        {
          img: info3,
          value: 18351,
          title: 'Prevención Enfermedaes de la Vista',
          subtitle: 'Cuidar tu vista para cuidar de tu emprendimiento'
        },
        {
          img: info4,
          value: 179,
          title: 'Enfremedades Crónico Degenerativas',
          subtitle: 'Apoyo en el tratatamiento de enfermedades para nuestras emprendedoras'
        },
    ]


  return (
    <div class="row align-items-start">
        {info.length !== 0 ?
          info.map((data,index) => (
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 font-roboto mt-3">
                <div className='text-center'text-start >
                  <img src={data.img} className="img-C2" alt=""/>
                </div>
                <div className='text-center secundario fs-4 fw-bold pb-2'text-start >
                  {data.value}
                </div>
                <div className='text-center text-start fs-5'>
                  <b>{data.title}</b>
                </div>
                <div className='text-xs-end text-sm-center text-md-centertext-lg-start primario px-5 fw-bold'>
                  {data.subtitle}
                </div>
              </div>
          )) : <></>
        }
    </div>
  )
}

export default infoPrevencion;