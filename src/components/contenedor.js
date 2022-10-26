import React from 'react';
import './css/contenedor.css';

const Contenedor = (props) => {
  return (

    <div className='contenedor2'>
        {props.children}
    </div>
    
  )
}

export default Contenedor;
