// import React, { Component } from 'react';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo_cnsrv from './../img/Logos/logo_cnsrv_white.svg'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

function Header({ Title }) {
    return (

        <header className="navbar-blue">
            <nav className="navbar navbar-light navbar-expand-md py-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="##">
                        <img src={logo_cnsrv} alt="" width="140" height="60" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-dark px-2" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Nosotros</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item mdp" to="##">Mujeres de Palabra</Link></li>
                                    <li><Link className="dropdown-item cta" to="##">Conserva T-activa</Link></li>
                                    <li><Link className="dropdown-item tcc" to="##">Tu negocio con conserva</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="##">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="##">Solicita tu crédito</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/help">Contáctanos</Link>
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