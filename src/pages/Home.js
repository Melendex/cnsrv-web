/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import NavBar from '../components/navBar';
import InfoPrevencion from '../components/Home/infoPrevencion';
import Info20Anios from '../components/Home/info20anios';
import Target2 from '../components/Target2';
import Footer from '../components/Footer';
import Slider from '../components/Home/Carousel';
import CreditsInfo  from '../components/Home/creditsInfo';
import '../styles/home.css';
import '../styles/navBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
      <NavBar/> 
      <Slider/>
      
      <section>
        <div className='text-center primario fs-3 mt-5'>
          <b>Impacto en la vida de las <b className='secundario'>personas</b></b>
        </div>
        <div className='text-center text-start fs-6'>
          <b>
            Gracias a los proyectos sociales de Conserva <br/> se ha podido mejorar la calidad de vida de miles de personas 
          </b>
        </div>
      </section>

      <InfoPrevencion/>

      <div className='txtInfo-H align-items-center mt-5 p-3 font-roboto'>
        <div className='text-center fs-3'>
          <b className='primario'>¡Comienza hoy tu crecimiento con nosotros!</b>
          <br/>
          <b>Nuestros Créditos</b>
        </div>
      </div>
      <div className='primario px-2 fw-bold fs-6 text-center mt-2 font-roboto'>
        Adecuamos nuestros servicios a tus necesidades y al desarollo de tu emprendimiento y te asesoramos en el crecimiento de tu negocio.
      </div>

      <Target2/>

      <CreditsInfo/>
    
      <Info20Anios/>

      <Footer/>

    </>
  )
}

export default Home