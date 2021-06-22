import React from 'react'
import './NavBar.css';

//DIFERENTES MANERAS DE PASAR LAS PORPS - 1°
function NavBar() {
    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border border-dark">
            <a className="nav-link img-nav" href="#inicio"><img src="data:image/png;base64,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"/></a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="#inicio">Inicio</a>
                      </li>
                       <li className="nav-item">
                           <a className="nav-link" href="#productos">Productos</a>
                      </li>
                       <li className="nav-item">
                            <a className="nav-link" href="#galeria">Galeria</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#sobre-nosotros">Sobre nosotros</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                         </li>
                     </ul>
                   </div>
                </nav>
        </div>
    )
}

export default NavBar