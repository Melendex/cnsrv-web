/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import NavBar from '../components/navBar';
import InfoPrevencion from '../components/Home/infoPrevencion';
import Info20Anios from '../components/Home/info20anios';
import home1 from '../img/CarouselHome/Carousel1.svg';
import home2 from '../img/CarouselHome/Carousel2.svg';
import home3 from '../img/CarouselHome/Carousel3.svg';
import home4 from '../img/CarouselHome/Carousel4.svg';
import home5 from '../img/CarouselHome/Carousel5.svg';
import '../styles/home.css';
import '../styles/navBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <>
      <NavBar/>      
      <Carousel verticalSwipe='natural' axis='horizontal' showArrows={true} showIndicators={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={false} className="font-roboto">
        <div class="row align-items-center text-start slider-H">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <b className='fs-2 primario'>Transformamos la vida de las personas</b>
            <div className='primario fs-5 fw-bold mt-3 text-start'>
              Acércate a nosotros y conoce todos los productos y beneficios que tenemos para tu bienestar
            </div>

            <div className='my-1 text-center'>
              <button className='btn btnSlide'>Saber más</button>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
            <img class="d-block img-sliderH img" src={home1} alt=""/>
          </div>
        </div>
        <div class="row align-items-center text-start slider-H">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img src={home2} class="d-block img-sliderH img" alt=""/>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <b className='fs-2 terciario'>Primero es tu salud cuídate</b>
            <div className='primario fs-5 fw-bold mt-3 text-start'>
              Conoce más sobre nuestro espacio <b className='terciario'>mujer</b> para saber más de las campañas de salud que tenemos para ti
            </div>

            <div className='my-1 text-center'>
              <button className='btn btnSlide'>Saber más</button>
            </div>
          </div>
        </div>
        <div class="row align-items-center text-start slider-H">
          <div class="col-sm-6 col-md-6 col-lg-6">
            <b className='fs-2 secundario'>Cuidar a la naturaleza es cuidar a las personas.</b>
            <div className='primario fs-5 fw-bold mt-3 text-start'>
              En Conserva las personas van primero y cuidar nuestro medio ambiente es vital para todos.
            </div>
            <div className='my-1 text-center'>
              <button className='btn btnSlide'>Saber más</button>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6">
            <img src={home3} class="d-block img-sliderH img" alt=""/>
          </div>
        </div>
        <div class="row align-items-center text-start slider-H">
          <div class="col-sm-6 col-md-6 col-lg-6">
            <b className='fs-2 primario'>Bonificación conserva</b>
            <div className='primario fs-5 fw-bold mt-3 text-start'>
              Conserva cree en tu palabra y te bonifica en <b className='secundario'>efectivo hasta el 1%</b> sobre tu monto otorgado, descubre cómo ganarla.
            </div>
            <div className='my-1 text-center'>
              <button className='btn btnSlide'>Saber más</button>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6">
            <img src={home4} class="d-block img-sliderH img" alt=""/>
          </div>
        </div>
        <div class="row align-items-center text-start slider-H">
          <div class="col-sm-6 col-md-6 col-lg-6">
            <img src={home5} class="d-block img-sliderH img" alt=""/>
          </div>
          <div class="col">
            <b className='fs-2 primario'>Tasa de interés conserva</b>
            <div className='primario fs-5 fw-bold mt-3 text-start'>
              Conserva lleva más de 20 años manteniendo una de las tasas de interés más bajas sin importar inflación o cambios económicos.
            </div>
            <div className='my-1 text-center'>
              <button className='btn btnSlide'>Saber más</button>
            </div>
          </div>
        </div>
      </Carousel>

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
    
      <Info20Anios/>

      {/* <Footer/> */}

    </>
  )
}

export default Home