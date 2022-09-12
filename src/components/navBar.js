/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import conserva from '../img/Conserva.svg'
import '../styles/navBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md borderNav py-0">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={conserva} alt="" width="140" height="70" class="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul class="dropdown-menu dropdown-menu-light">
                <li><a class="dropdown-item mdp" href="#">Mujeres de Palabra</a></li>
                <li><a class="dropdown-item cta" href="#">Conserva T-activa</a></li>
                <li><a class="dropdown-item tcc" href="#">Tu negocio con conserva</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Solicita tu crédito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contáctanos</a>
            </li>
            <li className="nav">
              <a className="nav-link btn btn-ingresar" href="#">Ingresa</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar