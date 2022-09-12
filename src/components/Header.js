// import React, { Component } from 'react';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo_cnsrv from './../img/Logos/logo_cnsrv_white.svg'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Header({ Title }) {
    return (

        <header className="navbar-blue">
            <nav className="navbar navbar-light navbar-expand-md borderNav py-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="##">
                        <img src={logo_cnsrv} alt="" width="140" height="60" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-dark px-2" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="##">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="##">Nosotros</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item mdp" href="##">Mujeres de Palabra</a></li>
                                    <li><a className="dropdown-item cta" href="##">Conserva T-activa</a></li>
                                    <li><a className="dropdown-item tcc" href="##">Tu negocio con conserva</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="##">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="##">Solicita tu crédito</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="##">Contáctanos</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn-ingresa">Ingresar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;