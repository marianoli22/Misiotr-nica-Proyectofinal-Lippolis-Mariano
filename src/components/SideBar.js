import React from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ "background-color": "lightseagreen" }}>
      <div className="container-fluid">
        <img src="/LOGO M.jpg" alt="Logo" className="logo" />
        <a className="navbar-brand" href="/">Misiotrónica</a>
              
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/venta">Venta</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mas información
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/quienesomos">Quienes Somos</a></li>
                <li><a className="dropdown-item" href="/contacto">Contacto</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" id="Buscador"/>
            {/* Agrega la barra diagonal antes del cierre del input */}
            <button className="btn btn-outline-success" type="submit" onClick="handleSearch" >Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
