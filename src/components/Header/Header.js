import React from 'react'
import './Header.css';

//DIFERENTES MANERAS DE PASAR LAS PORPS - 1°
function header(props) {
    return (
        <div className='header-container'>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default header
