/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import conserva from '../img/Conserva.svg'
import '../styles/navBar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar navbar-white navbar-expand-md borderNav py-0">
      <div className="container-fluid">
        <Link class="navbar-brand" to="#">
          <img src={conserva} alt="" width="140" height="70" class="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link  className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >Nosotros</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </Link>
              <ul class="dropdown-menu dropdown-menu-light">
                <li><Link class="dropdown-item mdp" to="#">Mujeres de Palabra</Link></li>
                <li><Link class="dropdown-item cta" to="#">Conserva T-activa</Link></li>
                <li><Link class="dropdown-item tcc" to="#">Tu negocio con conserva</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Solicita tu crédito</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Contáctanos</Link>
            </li>
            <li className="nav">
              <Link className="nav-link btn btn-ingresar" to="#">Ingresa</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar