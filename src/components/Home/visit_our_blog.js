import React from 'react';
import {Link }from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/visit_our_blog.css';

import img1 from '../../img/Blog/Img1.png';
import img2 from '../../img/Blog/Img2.png';
import img3 from '../../img/Blog/Img3.png';
import img4 from '../../img/Blog/Img4.png';

const Blog_Info = () => {

    return (
        <div className='container content-blog'>
            <div className='txt-blog'>Visita Nuestro Blog</div>

            <div className="row invertir">
                <div className='col-lg-8 grid-col1-blog'>
                    <div>Emprende un negocio propio hoy</div>
                    <div className='txt-infoBlog-content'>
                        El plan de tener un emprendimiento propio es frecuente entre los negocios de hoy, adaptándose 
                        al ramo de bienes y servicios ofrecidos, inversión y metodología a seguir. Si te has preguntado qué negocio emprender, 
                        en este artículo encontrarás varias ideas de negocios para ayudarte a dar ese primer paso.

                        <div className='content-btn-blog'>
                            <Link to='#' className='btn-blog'>Ir al blog</Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 grid-img1-content'>
                    <img className='radius-img-blog img1-blog' src={img1} alt=''/>
                </div>
            </div>

            <div className='content-imgs-blog'>
                <img className='radius-img-blog img2-blog' alt='' src={img4} />
                <img className='radius-img-blog img3-blog' alt='' src={img3} />
                <img className='radius-img-blog img4-blog' alt='' src={img2} />
            </div>

            <div className='row subscribe-blog'>
                <div className='col-sm-12 col-md-8 col-lg-8 text-end content-input-blog'>
                    <input className='input-blog' placeholder='usuario@correo.com'/>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-4 content-btn-subscribe'>
                    <Link className='btn-subscribe-blog' to=' '> Suscribete</Link>
                </div>
            </div>

        </div>
    )
}

export default Blog_Info;
