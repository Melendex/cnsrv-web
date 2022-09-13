import React from 'react';
import {Link }from "react-router-dom";
import home1 from '../../img/CarouselHome/Carousel1.svg';
import home2 from '../../img/CarouselHome/Carousel2.svg';
import home3 from '../../img/CarouselHome/Carousel3.svg';
import home4 from '../../img/CarouselHome/Carousel4.svg';
import home5 from '../../img/CarouselHome/Carousel5.svg';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/home.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {

    const infoSliders = [
        {
            img: home1,
            title: 'Transformamos la vida de las personas',
            subtitle: 'Acércate a nosotros y conoce todos los productos y beneficios que tenemos para tu bienestar',
            txt_btn: 'Saber más',
            url_btn: '/about'
        },
        {
            img: home2,
            title: 'Primero es tu salud cuídate',
            subtitle: 'Conoce más sobre nuestro espacio mujer, para saber más de las campañas de salud que tenemos para ti',
            txt_btn: 'Saber más',
            url_btn: '##'
        },
        {
            img: home3,
            title: 'Cuidar a la naturaleza es cuidar a las personas',
            subtitle: 'En Conserva las personas van primero y cuidar nuestro medio ambiente es vital para todos',
            txt_btn: 'Saber más',
            url_btn: '##'
        },
        {
            img: home5,
            title: 'Tasa de interés conserva',
            subtitle: 'Conserva lleva más de 20 años manteniendo una de las tasas de interés más bajas sin importar inflación o cambios económicos',
            txt_btn: 'Saber más',
            url_btn: '##'
        },
        {
            img: home4,
            title: 'Bonificación conserva',
            subtitle: 'Conserva cree en tu palabra y te bonifica en efectivo hasta el 1% sobre tu monto otorgado, descubre cómo ganarla',
            txt_btn: 'Saber más',
            url_btn: '##'
        },
        
    ]

    const btn = (txt_btn, url_btn) =>{
        return(
            <div className='my-3 text-center'>
              {/* <a href= {url_btn} className='btn btnSlide'>{txt_btn}</a> */}
              <Link to={url_btn} className='btn btnSlide'>{txt_btn}</Link>
            </div>
        )
    }

    const item_txtLeft = (title, subtitle, img, txt_btn, url_btn) =>{
        return(
            <>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <b className='fs-2 secundario'>{title}</b>
                    <div className='primario fs-5 fw-bold mt-3 text-start'>
                        {subtitle}
                    </div>
                    {
                        txt_btn !== undefined || txt_btn === ''
                        ? btn(txt_btn, url_btn) : <></>
                    }
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <img src={img} className="d-block img-sliderH img" alt=""/>
                </div>
            </>
        )
    }

    const item_txtRight = (title, subtitle, img, txt_btn, url_btn) =>{
        return(
            <>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <img src={img} className="d-block img-sliderH img" alt=""/>
                </div>
                <div className="col">
                    <b className='fs-2 primario'>{title}</b>
                    <div className='primario fs-5 fw-bold mt-3 text-start'>
                        {subtitle}
                    </div>
                    {
                        txt_btn !== undefined || txt_btn !== ''
                        ? btn(txt_btn, url_btn) : <></>
                    }
                </div>
            
            </>
        )
    }


    return (
        <Carousel verticalSwipe='natural' axis='horizontal' showArrows={true} showIndicators={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={false} className="font-roboto">
            {
                infoSliders.map((data, i) => (
                    <>
                        {
                            i % 2 === 0 
                            ? <div key={i} className="row align-items-center text-start slider-H">
                                {item_txtLeft(data.title, data.subtitle, data.img, data.txt_btn, data.url_btn)}
                                </div>
                            : <div key={i} className="row align-items-center text-start slider-H">
                                {item_txtRight(data.title, data.subtitle, data.img, data.txt_btn, data.url_btn)}
                            </div>
                        }
                    </>
                ))
            }
            {/* {
                <div className="row align-items-center text-start slider-H">     
                    {infoSliders.map((data, i) => (   
                        i % 2 === 0 
                        ? item_txtLeft(data.title, data.subtitle, data.img, data.txt_btn, data.url_btn)
                        : item_txtRight(data.title, data.subtitle, data.img, data.txt_btn, data.url_btn)
                            
                    ))}
                </div>
            } */}
        </Carousel>
    )
}

export default Slider