import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/help.css'
import Llamanos from '../img/Llamanos.svg'

import Contenedor from '../components/Container';

const Help = () => {
  return (
    <>

        <NavBar/>

        <div className='text-center txtHelp'>
            <div className='txt1Help'>Necesitas ayuda </div>

            <div className='txt2Help'>
                En Conserva siempre queremos ayudarte déjanos tus <b>comentarios, sugerencias o denuncias</b> aquí
            </div>
            <Contenedor>
                <form className='text-start'>
                    <div className="mb-3">
                        <label className="form-label">Nombre completo*</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email*</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Telefono*</label>
                        <input type="text" className="form-control" id="phone"/>
                    </div>
                    <div class="mb-3">
                    <label className="form-label">Que deseas dejarnos*</label>
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Comentario</option>
                        <option value="1">Denuncia</option>
                        <option value="2">Queja</option>
                    </select>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Dejanos tus comentarios*</label>
                        <textarea type="text" className="form-control" id="password"/>
                    </div>
                    <div className='txt3Help'>
                        Los campos con * son obligatorios
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btnHelp">Enviar</button>
                    </div>
                </form>

                <div className='text-center'>
                    <img src={Llamanos} className='imgHelp' alt=''/>
                </div>
            </Contenedor>
        </div>

        <Footer/>
    </>
  )
}

export default Help;
