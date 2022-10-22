import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/successStories.css';

import history1 from '../../img/SuccessStories/History1.svg';

const SuccessStories = () => {
  return (
    <div className='container primario text-center mt-5'>
    
        <div className='row'>
            <div className='txtStorie'>
                 Qué dicen las personas...
            </div>
            <div className='col-md-8 col-lg-8'>

                <div className='txt2Stories'>
                    Gracias a Dios y a Conserva que nos han apoyado. Gracias a Dios y a ellos tengo mi negocio que me ha funcionado muy bien y sigo a delante.
                </div>
                <div className='txt3Stories'>
                    Señora María Luisa<br/>
                    Clienta de conserva del grupo 5 estrellas
                </div>
            </div>
            <div className='col-md-4 col-lg-4'>
                <img src={history1} className="videoStorie" alt=""/>
            </div>
        </div>

    </div>
  )
}

export default SuccessStories;