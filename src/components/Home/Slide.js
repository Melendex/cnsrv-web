import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as FlechaIzquierda } from '../../img/infoPrevencion/indicador_izquierda.svg';
import { ReactComponent as FlechaDerecha } from '../../img/infoPrevencion/indicador_derecha.svg';

import './styles/Slide.css'

const MySlide = (props) =>{
  const [hide, setHide] = useState(true)

  useEffect(()=> {
    setHide(props.controls)
  },[props])

  const slideRef = useRef(null);


  const next = () =>{

    if(slideRef.current.children.length >0){
      const primerElemento = slideRef.current.children[0];
      const sizeSlide = primerElemento.offsetWidth;

      // slideRef.current.style.transition = `300ms ease-out all`;
      slideRef.current.style.transition = `all 2s`;
      slideRef.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transicion = () => {
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(0)`;

        //mandamos al final el primer elemento
        slideRef.current.appendChild(primerElemento);

        // slideRef.current.removeEventListener('transitionend', transicion());
      }

      slideRef.current.addEventListener('transitionend', transicion());
      
    }

  }
  const prev = () =>{
    if(slideRef.current.children.length >0){

      const idx = slideRef.current.children.length - 1;
      const ultimoElemento = slideRef.current.children[idx];

      //Insertamos el ultimo elemento antes del primer elemento
      slideRef.current.insertBefore(ultimoElemento, slideRef.current.firstChild);

      // const sizeSlide = slideRef.current.children[0].offsetWidth;
      // slideRef.current.style.transition = 'none';
      // slideRef.current.style.transform = `translateX(-${sizeSlide}px)`;

      // // setTimeout(() => {
      // //   slideRef.current.style.transition = 'none';
      // //   slideRef.current.style.transform = `translateX(0)`;
      // // }, 30)

      // const transicion = () => {
      //   slideRef.current.style.transition = 'none';
      //   slideRef.current.style.transform = `translateX(0)`;
      // }

      // slideRef.current.addEventListener('transitionend', transicion());
    }
  }

    return (
          <div className="slider-container">  
            <div className='content-slide-show' ref={slideRef}>
              {/* <div className='slide-item'>

                <img className="slider-item" alt="" src={info1}/>
                <div>
                  1856
                </div>
                <div>
                  Prevención Cáncer Cervicouterino
                </div>
                <div>
                  Una mujer emprendedora necesita salud para estar bien en su negocio
                </div>
              </div>*/}

              {props.children}

            </div>

            <div className='btn-controls' hidden={!hide}>
              <button onClick={() =>  prev()}>
                <FlechaIzquierda/>
              </button>
              <button className='btn-right' onClick={() => next()}>
                <FlechaDerecha/>
              </button>
            </div>
            
          </div>  
    );
}

export default MySlide;
